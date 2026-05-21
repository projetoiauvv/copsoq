const LIKERT_OPTIONS = [
  { value: "", label: "Selecione" },
  { value: "0", label: "0 - Nunca / Muito baixo" },
  { value: "1", label: "1 - Raramente / Baixo" },
  { value: "2", label: "2 - Às vezes / Médio" },
  { value: "3", label: "3 - Frequentemente / Alto" },
  { value: "4", label: "4 - Sempre / Muito alto" },
];

/**
 * Configuração obrigatória COPSOQ II – Versão Média com 76 itens.
 * Se você já possui o documento oficial institucional, ajuste apenas os textos/reversões
 * mantendo os IDs q1..q76 para analisar sua base existente.
 */
const QUESTIONNAIRE = Array.from({ length: 76 }, (_, i) => ({
  id: `q${i + 1}`,
  text: `Pergunta ${i + 1}`,
  dimension: `Dimensão ${Math.floor(i / 4) + 1}`,
  reverse: false,
}));

function validateQuestionnaireConfig() {
  if (QUESTIONNAIRE.length !== 76) {
    throw new Error("Configuração inválida: o COPSOQ II – Versão Média exige exatamente 76 perguntas.");
  }
}

function likertTo100(v) {
  return Number(v) * 25;
}

function classify(score) {
  if (score <= 33) return { key: "low", label: "Atenção baixa" };
  if (score <= 66) return { key: "medium", label: "Atenção moderada" };
  return { key: "high", label: "Atenção alta" };
}

function groupByDimension(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.dimension]) acc[item.dimension] = [];
    acc[item.dimension].push(item);
    return acc;
  }, {});
}

function buildForm() {
  validateQuestionnaireConfig();
  const form = document.getElementById("copsoq-form");
  const grouped = groupByDimension(QUESTIONNAIRE);

  Object.entries(grouped).forEach(([dimension, items]) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = dimension;
    fieldset.appendChild(legend);

    items.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "question";

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = `${item.id.toUpperCase()} — ${item.text}`;

      const select = document.createElement("select");
      select.id = item.id;
      select.name = item.id;

      LIKERT_OPTIONS.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
      });

      wrapper.appendChild(label);
      wrapper.appendChild(select);
      fieldset.appendChild(wrapper);
    });

    form.appendChild(fieldset);
  });

  document.getElementById("question-count").textContent = String(QUESTIONNAIRE.length);
}

function calculateFromAnswerObject(answerById) {
  const rawAnswers = {};
  const byDimension = {};

  for (const item of QUESTIONNAIRE) {
    const value = answerById[item.id];
    if (value === undefined || value === null || value === "") {
      throw new Error(`Resposta ausente: ${item.id}`);
    }
    const normalized = likertTo100(value);
    const finalScore = item.reverse ? 100 - normalized : normalized;

    rawAnswers[item.id] = { value: Number(value), normalized, finalScore, dimension: item.dimension };
    if (!byDimension[item.dimension]) byDimension[item.dimension] = [];
    byDimension[item.dimension].push(finalScore);
  }

  const dimensions = Object.entries(byDimension).map(([dimension, scores]) => {
    const score = scores.reduce((a, b) => a + b, 0) / scores.length;
    return {
      dimension,
      score: Number(score.toFixed(2)),
      classification: classify(score),
      nItems: scores.length,
    };
  });

  const global = dimensions.reduce((a, b) => a + b.score, 0) / dimensions.length;

  return {
    generatedAt: new Date().toISOString(),
    totalQuestions: QUESTIONNAIRE.length,
    globalIndex: Number(global.toFixed(2)),
    globalClass: classify(global),
    dimensions,
    answers: rawAnswers,
  };
}

function calculateReport() {
  try {
    const answers = {};
    for (const item of QUESTIONNAIRE) {
      answers[item.id] = document.getElementById(item.id).value;
    }
    const result = calculateFromAnswerObject(answers);
    renderReport(result);
    window.__LAST_REPORT__ = result;
  } catch (e) {
    alert(e.message);
  }
}

function renderReport(result) {
  document.getElementById("report-empty").classList.add("hidden");
  document.getElementById("report-content").classList.remove("hidden");
  document.getElementById("global-index").textContent = `${result.globalIndex} / 100 (${result.globalClass.label})`;

  const container = document.getElementById("dimension-results");
  container.innerHTML = "";

  result.dimensions.forEach((d) => {
    const row = document.createElement("div");
    row.className = "result-row";
    row.innerHTML = `
      <div><strong>${d.dimension}</strong> (${d.nItems} itens)</div>
      <div>Score: ${d.score} / 100</div>
      <div class="badge ${d.classification.key}">${d.classification.label}</div>
    `;
    container.appendChild(row);
  });
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) throw new Error("CSV sem dados.");

  const headers = lines[0].split(",").map((h) => h.trim());
  const required = QUESTIONNAIRE.map((q) => q.id);
  for (const req of required) {
    if (!headers.includes(req)) {
      throw new Error(`CSV inválido: coluna obrigatória ausente (${req}).`);
    }
  }

  const idxByHeader = Object.fromEntries(headers.map((h, i) => [h, i]));
  const analyses = [];

  for (let i = 1; i < lines.length; i += 1) {
    const cols = lines[i].split(",").map((c) => c.trim());
    const answers = {};
    for (const q of QUESTIONNAIRE) {
      answers[q.id] = cols[idxByHeader[q.id]];
    }
    analyses.push(calculateFromAnswerObject(answers));
  }

  return analyses;
}

function analyzeCsvBase() {
  const input = document.getElementById("csv-input");
  const file = input.files?.[0];
  if (!file) {
    alert("Selecione um arquivo CSV com colunas q1..q76.");
    return;
  }
  file.text().then((text) => {
    try {
      const analyses = parseCsv(text);
      const globalAvg = analyses.reduce((sum, row) => sum + row.globalIndex, 0) / analyses.length;
      document.getElementById("base-summary").textContent = `Base analisada com sucesso: ${analyses.length} respostas. Índice global médio: ${globalAvg.toFixed(2)} / 100.`;
      window.__LAST_BATCH_REPORT__ = analyses;
    } catch (e) {
      alert(e.message);
    }
  });
}

function downloadReport() {
  if (!window.__LAST_REPORT__) return alert("Gere um relatório antes de exportar.");
  const blob = new Blob([JSON.stringify(window.__LAST_REPORT__, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `relatorio-copsoq-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadPdfReport() {
  if (!window.__LAST_REPORT__) return alert("Gere um relatório antes de baixar em PDF.");
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  let y = 50;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Relatório COPSOQ II – Versão Média (76 itens)", 40, y);
  y += 24;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Índice global: ${window.__LAST_REPORT__.globalIndex} / 100`, 40, y);
  y += 20;
  window.__LAST_REPORT__.dimensions.forEach((d, i) => {
    if (y > 780) { doc.addPage(); y = 50; }
    doc.text(`${i + 1}. ${d.dimension}: ${d.score} / 100 (${d.classification.label})`, 40, y);
    y += 16;
  });
  doc.save(`relatorio-copsoq-${new Date().toISOString().slice(0, 10)}.pdf`);
}

buildForm();
document.getElementById("calculate-btn").addEventListener("click", calculateReport);
document.getElementById("download-btn").addEventListener("click", downloadReport);
document.getElementById("download-pdf-btn").addEventListener("click", downloadPdfReport);
document.getElementById("analyze-base-btn").addEventListener("click", analyzeCsvBase);
