const LIKERT_OPTIONS = [
  { value: "", label: "Selecione uma opção" },
  { value: "0", label: "Nunca / Muito baixo" },
  { value: "1", label: "Raramente / Baixo" },
  { value: "2", label: "Às vezes / Médio" },
  { value: "3", label: "Frequentemente / Alto" },
  { value: "4", label: "Sempre / Muito alto" },
];

const QUESTIONNAIRE = [
  {
    dimension: "Demandas no trabalho",
    items: [
      { id: "q1", text: "Você precisa trabalhar muito rápido?", reverse: false },
      { id: "q2", text: "Você tem volume de trabalho excessivo?", reverse: false },
    ],
  },
  {
    dimension: "Controle e autonomia",
    items: [
      { id: "q3", text: "Você pode influenciar decisões sobre seu trabalho?", reverse: true },
      { id: "q4", text: "Você tem liberdade para planejar suas tarefas?", reverse: true },
    ],
  },
  {
    dimension: "Suporte social",
    items: [
      { id: "q5", text: "Você recebe ajuda dos colegas quando necessário?", reverse: true },
      { id: "q6", text: "Você recebe apoio da liderança imediata?", reverse: true },
    ],
  },
  {
    dimension: "Reconhecimento e justiça",
    items: [
      { id: "q7", text: "Seu trabalho é reconhecido de forma justa?", reverse: true },
      { id: "q8", text: "As decisões na empresa são comunicadas com transparência?", reverse: true },
    ],
  },
  {
    dimension: "Saúde e bem-estar",
    items: [
      { id: "q9", text: "Você se sente mentalmente exausto(a) ao fim do expediente?", reverse: false },
      { id: "q10", text: "Você tem dificuldade para recuperar energia fora do trabalho?", reverse: false },
    ],
  },
];

function likertTo100(v) {
  return Number(v) * 25;
}

function classify(score) {
  if (score <= 33) return { key: "low", label: "Atenção baixa" };
  if (score <= 66) return { key: "medium", label: "Atenção moderada" };
  return { key: "high", label: "Atenção alta" };
}

function buildForm() {
  const form = document.getElementById("copsoq-form");

  QUESTIONNAIRE.forEach((group) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = group.dimension;
    fieldset.appendChild(legend);

    group.items.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "question";

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = item.text;

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
}

function calculateReport() {
  const rawAnswers = {};
  const dimensionScores = [];

  for (const group of QUESTIONNAIRE) {
    const itemScores = [];

    for (const item of group.items) {
      const value = document.getElementById(item.id).value;
      if (value === "") {
        alert("Responda todas as perguntas antes de gerar o relatório.");
        return;
      }

      const normalized = likertTo100(value);
      const finalScore = item.reverse ? 100 - normalized : normalized;
      rawAnswers[item.id] = { value: Number(value), normalized, finalScore };
      itemScores.push(finalScore);
    }

    const dimensionScore = itemScores.reduce((a, b) => a + b, 0) / itemScores.length;
    dimensionScores.push({
      dimension: group.dimension,
      score: Number(dimensionScore.toFixed(2)),
      classification: classify(dimensionScore),
    });
  }

  const global = dimensionScores.reduce((a, b) => a + b.score, 0) / dimensionScores.length;
  const result = {
    generatedAt: new Date().toISOString(),
    globalIndex: Number(global.toFixed(2)),
    globalClass: classify(global),
    dimensions: dimensionScores,
    answers: rawAnswers,
  };

  renderReport(result);
  window.__LAST_REPORT__ = result;
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
      <div><strong>${d.dimension}</strong></div>
      <div>Score: ${d.score} / 100</div>
      <div class="badge ${d.classification.key}">${d.classification.label}</div>
    `;
    container.appendChild(row);
  });
}

function resetFormAndReport() {
  document.getElementById("copsoq-form").reset();
  document.getElementById("report-content").classList.add("hidden");
  document.getElementById("report-empty").classList.remove("hidden");
  document.getElementById("dimension-results").innerHTML = "";
  document.getElementById("global-index").textContent = "";
  window.__LAST_REPORT__ = null;
}

function downloadReport() {
  if (!window.__LAST_REPORT__) {
    alert("Gere um relatório antes de exportar.");
    return;
  }

  const blob = new Blob([JSON.stringify(window.__LAST_REPORT__, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `relatorio-copsoq-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

buildForm();
document.getElementById("calculate-btn").addEventListener("click", calculateReport);
document.getElementById("reset-btn").addEventListener("click", resetFormAndReport);
document.getElementById("download-btn").addEventListener("click", downloadReport);
