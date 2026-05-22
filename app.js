/**
 * COPSOQ II – Versão Média Portuguesa (76 itens)
 * - Escala Likert 1..5
 * - Itens invertidos: 42 e 45
 * - Interpretação por subescala (fator a fator)
 * - Semáforo por tercis: <=2.33, >2.33 e <3.66, >=3.66
 */

const SUBSCALES = [
  { name: "Exigências quantitativas", count: 3, favorableHigh: false },
  { name: "Ritmo de trabalho", count: 1, favorableHigh: false },
  { name: "Exigências cognitivas", count: 3, favorableHigh: false },
  { name: "Exigências emocionais", count: 1, favorableHigh: false },
  { name: "Influência no trabalho", count: 4, favorableHigh: true },
  { name: "Possibilidades de desenvolvimento", count: 3, favorableHigh: true },
  { name: "Previsibilidade", count: 2, favorableHigh: true },
  { name: "Transparência do papel laboral", count: 3, favorableHigh: true },
  { name: "Recompensas", count: 3, favorableHigh: true },
  { name: "Conflitos laborais", count: 3, favorableHigh: false },
  { name: "Apoio social de colegas", count: 3, favorableHigh: true },
  { name: "Apoio social de superiores", count: 3, favorableHigh: true },
  { name: "Comunidade social no trabalho", count: 3, favorableHigh: true },
  { name: "Qualidade da liderança", count: 4, favorableHigh: true },
  { name: "Confiança horizontal", count: 3, favorableHigh: true },
  { name: "Confiança vertical", count: 3, favorableHigh: true },
  { name: "Justiça e respeito", count: 3, favorableHigh: true },
  { name: "Auto-eficácia", count: 2, favorableHigh: true },
  { name: "Significado do trabalho", count: 3, favorableHigh: true },
  { name: "Compromisso com o local de trabalho", count: 2, favorableHigh: true },
  { name: "Satisfação no trabalho", count: 4, favorableHigh: true },
  { name: "Insegurança laboral", count: 1, favorableHigh: false },
  { name: "Saúde geral", count: 1, favorableHigh: true },
  { name: "Conflito trabalho-família", count: 3, favorableHigh: false },
  { name: "Problemas em dormir", count: 2, favorableHigh: false },
  { name: "Burnout", count: 2, favorableHigh: false },
  { name: "Stress", count: 2, favorableHigh: false },
  { name: "Sintomas depressivos", count: 2, favorableHigh: false },
  { name: "Comportamentos ofensivos", count: 4, favorableHigh: false },
];

const QUESTION_TEXTS = [
  "A sua carga de trabalho acumula-se por ser mal distribuída?",
  "Com que frequência não tem tempo para completar todas as tarefas do seu trabalho?",
  "Precisa fazer horas-extra?",
  "Precisa trabalhar muito rapidamente?",
  "O seu trabalho exige a sua atenção constante?",
  "O seu trabalho requer que seja bom a propor novas ideias?",
  "O seu trabalho exige que tome decisões difíceis?",
  "O seu trabalho exige emocionalmente de si?",
  "Tem um elevado grau de influência no seu trabalho?",
  "Participa na escolha das pessoas com quem trabalha?",
  "Pode influenciar a quantidade de trabalho que lhe compete a si?",
  "Tem alguma influência sobre o tipo de tarefas que faz?",
  "O seu trabalho exige que tenha iniciativa?",
  "O seu trabalho permite-lhe aprender coisas novas?",
  "O seu trabalho permite-lhe usar as suas habilidades ou perícias?",
  "No seu local de trabalho, é informado com antecedência sobre decisões importantes, mudanças ou planos para o futuro?",
  "Recebe toda a informação de que necessita para fazer bem o seu trabalho?",
  "O seu trabalho apresenta objectivos claros?",
  "Sabe exactamente quais as suas responsabilidades?",
  "Sabe exactamente o que é esperado de si?",
  "O seu trabalho é reconhecido e apreciado pela gerência?",
  "A gerência do seu local de trabalho respeita-o?",
  "É tratado de forma justa no seu local de trabalho?",
  "Faz coisas no seu trabalho que uns concordam mas outros não?",
  "Por vezes tem que fazer coisas que deveriam ser feitas de outra maneira?",
  "Por vezes tem que fazer coisas que considera desnecessárias?",
  "Com que frequência tem ajuda e apoio dos seus colegas de trabalho?",
  "Com que frequência os seus colegas estão dispostos a ouvi-lo(a) sobre os seus problemas de trabalho?",
  "Com que frequência os seus colegas falam consigo acerca do seu desempenho laboral?",
  "Com que frequência o seu superior imediato fala consigo sobre como está a decorrer o seu trabalho?",
  "Com que frequência tem ajuda e apoio do seu superior imediato?",
  "Com que frequência é que o seu superior imediato fala consigo em relação ao seu desempenho laboral?",
  "Existe um bom ambiente de trabalho entre si e os seus colegas?",
  "Existe uma boa cooperação entre os colegas de trabalho?",
  "No seu local de trabalho sente-se parte de uma comunidade?",
  "Oferece aos indivíduos e ao grupo boas oportunidades de desenvolvimento?",
  "Dá prioridade à satisfação no trabalho?",
  "É bom no planeamento do trabalho?",
  "É bom a resolver conflitos?",
  "Os funcionários ocultam informações uns dos outros?",
  "Os funcionários ocultam informação à gerência?",
  "Os funcionários confiam uns nos outros de um modo geral?",
  "A gerência confia nos seus funcionários para fazerem o seu trabalho bem?",
  "Confia na informação que lhe é transmitida pela gerência?",
  "A gerência oculta informação aos seus funcionários?",
  "Os conflitos são resolvidos de uma forma justa?",
  "As sugestões dos funcionários são tratadas de forma séria pela gerência?",
  "O trabalho é igualmente distribuído pelos funcionários?",
  "Sou sempre capaz de resolver problemas, se tentar o suficiente.",
  "É-me fácil seguir os meus planos e atingir os meus objectivos.",
  "O seu trabalho tem algum significado para si?",
  "Sente que o seu trabalho é importante?",
  "Sente-se motivado e envolvido com o seu trabalho?",
  "Gosta de falar com os outros sobre o seu local de trabalho?",
  "Sente que os problemas do seu local de trabalho são seus também?",
  "As suas perspectivas de trabalho?",
  "As condições físicas do seu local de trabalho?",
  "A forma como as suas capacidades são utilizadas?",
  "O seu trabalho de uma forma global?",
  "Sente-se preocupado em ficar desempregado?",
  "Em geral, sente que a sua saúde é:",
  "Sente que o seu trabalho lhe exige muita energia que acaba por afectar a sua vida privada negativamente?",
  "Sente que o seu trabalho lhe exige muito tempo que acaba por afectar a sua vida privada negativamente?",
  "A sua família e os seus amigos dizem-lhe que trabalha demais?",
  "Dificuldade a adormecer?",
  "Acordou várias vezes durante a noite e depois não conseguia adormecer novamente?",
  "Fisicamente exausto?",
  "Emocionalmente exausto?",
  "Irritado?",
  "Ansioso?",
  "Triste?",
  "Falta de interesse por coisas quotidianas?",
  "Tem sido alvo de insultos ou provocações verbais?",
  "Tem sido exposto a assédio sexual indesejado?",
  "Tem sido exposto a ameaças de violência?",
  "Tem sido exposto a violência física?",
];

function buildQuestionnaire() {
  const items = [];
  let qNum = 1;
  SUBSCALES.forEach((s) => {
    for (let i = 0; i < s.count; i += 1) {
      items.push({
        id: `q${qNum}`,
        text: QUESTION_TEXTS[qNum - 1],
        subscale: s.name,
        favorableHigh: s.favorableHigh,
        reverse: qNum === 42 || qNum === 45,
      });
      qNum += 1;
    }
  });
  return items;
}

const QUESTIONNAIRE = buildQuestionnaire();
function validateQuestionnaireConfig() {
  if (QUESTIONNAIRE.length !== 76 || QUESTION_TEXTS.length !== 76) throw new Error("Configuração inválida: exige 76 itens.");
}

function detectDelimiter(line) {
  const comma = (line.match(/,/g) || []).length;
  const semicolon = (line.match(/;/g) || []).length;
  const tab = (line.match(/	/g) || []).length;
  if (tab >= comma && tab >= semicolon && tab > 0) return "	";
  if (semicolon > comma && semicolon > 0) return ";";
  return ",";
}

function parseDelimitedLine(line, delimiter) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === delimiter && !inQuotes) {
      out.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur.trim());
  return out;
}

function normalizeHeaderName(value) {
  return String(value || "")
    .replace(/^﻿/, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-\.]/g, "");
}

function toCanonicalQuestionKey(value) {
  const v = normalizeHeaderName(value);
  const m = v.match(/^q(?:uest(?:ao|ão)?|uestion)?(\d{1,3})$/i);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isInteger(n) || n < 1 || n > 76) return null;
  return `q${n}`;
}

function normalizeQuestionText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/^pontos\s*[–-]\s*/i, "")
    .replace(/^comentarios?\s*[–-]\s*/i, "")
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function buildQuestionTextToKeyMap() {
  const map = {};
  QUESTIONNAIRE.forEach((q, idx) => {
    map[normalizeQuestionText(q.text)] = `q${idx + 1}`;
  });
  return map;
}

function buildStrictTripletMappingFromQuestions(headers) {
  const normalizedHeaders = headers.map((h) => normalizeQuestionText(h));
  const mapping = {};

  QUESTIONNAIRE.forEach((q, idx) => {
    const key = `q${idx + 1}`;
    const qText = normalizeQuestionText(q.text);
    const pontosPrefix = `pontos ${qText}`;

    // 1) regra solicitada: priorizar a coluna da própria pergunta (ex.: coluna O para q1)
    const qIdx = normalizedHeaders.findIndex((h) => h === qText);
    if (qIdx >= 0) {
      mapping[key] = qIdx;
      return;
    }

    // 2) fallback: coluna "Pontos – <pergunta>"
    const pontosIdx = normalizedHeaders.findIndex((h) => h === pontosPrefix || (h.endsWith(` ${qText}`) && h.startsWith("pontos ")));
    if (pontosIdx >= 0) mapping[key] = pontosIdx;
  });

  return mapping;
}




function splitDelimitedRecords(text) {
  const records = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '""';
        i += 1;
      } else {
        inQuotes = !inQuotes;
        cur += ch;
      }
      continue;
    }

    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && text[i + 1] === "\n") i += 1;
      if (cur.trim().length > 0) records.push(cur);
      cur = "";
      continue;
    }

    cur += ch;
  }

  if (cur.trim().length > 0) records.push(cur);
  return records;
}

function isLikertValue(v) {
  return /^[1-5]$/.test(String(v ?? "").trim());
}

function parseLikertValue(rawValue) {
  const raw = String(rawValue ?? "").trim().toLowerCase();
  if (!raw) return null;
  if (/^[1-5]$/.test(raw)) return Number(raw);
  const numericInText = raw.match(/\b([1-5])\b/);
  if (numericInText) return Number(numericInText[1]);

  const normalized = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/(nunca|quase nunca)/.test(normalized)) return 1;
  if (/raramente/.test(normalized)) return 2;
  if (/as vezes/.test(normalized)) return 3;
  if (/frequentemente/.test(normalized)) return 4;
  if (/sempre/.test(normalized)) return 5;

  if (/(nada|quase nada)/.test(normalized)) return 1;
  if (/um pouco/.test(normalized)) return 2;
  if (/moderadamente/.test(normalized)) return 3;
  if (/muito/.test(normalized)) return 4;
  if (/extremamente/.test(normalized)) return 5;

  // Escala de satisfação/qualidade frequentemente usada em exports
  if (/muito satisfeito/.test(normalized)) return 5;
  if (/satisfeito/.test(normalized)) return 4;
  if (/nem satisfeito nem insatisfeito|neutro/.test(normalized)) return 3;
  if (/insatisfeito/.test(normalized)) return 2;
  if (/muito insatisfeito/.test(normalized)) return 1;

  // Escala saúde geral textual (excelente -> deficitária)
  if (/excelente/.test(normalized)) return 1;
  if (/muito boa/.test(normalized)) return 2;
  if (/boa/.test(normalized)) return 3;
  if (/razoavel/.test(normalized)) return 4;
  if (/deficitaria/.test(normalized)) return 5;

  return null;
}

function getLikertFromRow(cols, preferredIdx) {
  const picks = [preferredIdx, preferredIdx + 1, preferredIdx - 1, preferredIdx + 2, preferredIdx - 2];
  for (const idx of picks) {
    if (idx === undefined || idx === null || idx < 0 || idx >= cols.length) continue;
    const value = String(cols[idx] ?? "").trim();
    const parsed = parseLikertValue(value);
    if (parsed !== null) return String(parsed);
  }
  return String(cols[preferredIdx] ?? "").trim();
}

function scoreHeaderCandidate(headers) {
  const qMap = buildQuestionTextToKeyMap();
  let count = 0;
  headers.forEach((h) => {
    const direct = toCanonicalQuestionKey(h);
    if (direct) {
      count += 1;
      return;
    }
    const byText = qMap[normalizeQuestionText(h)];
    if (byText) count += 1;
  });
  return count;
}


function isAdministrativePontosHeader(normalizedHeader) {
  return normalizedHeader === "cargo" || normalizedHeader === "setorareacurso" || normalizedHeader === "totaldepontos";
}

function buildSequentialPontosIndex(headers) {
  const seq = [];
  headers.forEach((h, idx) => {
    const raw = String(h || "");
    if (!/\bpontos\b/i.test(raw)) return;
    if (/\bcoment[aá]rios?\b/i.test(raw)) return;
    const normalized = normalizeQuestionText(raw);
    if (isAdministrativePontosHeader(normalized)) return;
    seq.push(idx);
  });

  if (seq.length < 76) return null;

  const mapping = {};
  for (let i = 0; i < Math.min(76, seq.length); i += 1) {
    mapping[`q${i + 1}`] = seq[i];
  }
  return { mapping, sequence: seq };
}

function buildCanonicalIndex(headers) {
  const required=QUESTIONNAIRE.map((q)=>q.id);
  const questionTextMap = buildQuestionTextToKeyMap();
  const candidates = {};

  headers.forEach((h,i)=>{
    const direct = toCanonicalQuestionKey(h);
    if (direct) {
      if (!candidates[direct]) candidates[direct] = [];
      candidates[direct].push(i);
      return;
    }
    const byText = questionTextMap[normalizeQuestionText(h)];
    if (byText) {
      if (!candidates[byText]) candidates[byText] = [];
      candidates[byText].push(i);
    }
  });

  const canonicalToIndex = {};
  required.forEach((q) => {
    const idxs = candidates[q] || [];
    if (!idxs.length) return;
    // Prefer colunas "Pontos - ..." quando houver duplicidade
    const pontosIdx = idxs.find((idx) => /^\s*pontos\s*[–-]/i.test(String(headers[idx] || "")));
    canonicalToIndex[q] = pontosIdx ?? idxs[0];
  });
  return canonicalToIndex;
}

function classifyTercil(mean, favorableHigh){ if(favorableHigh){ if(mean<=2.33)return{color:"red",label:"Risco para a saúde"}; if(mean<3.66)return{color:"yellow",label:"Intermédio"}; return{color:"green",label:"Situação favorável"}; } if(mean<=2.33)return{color:"green",label:"Situação favorável"}; if(mean<3.66)return{color:"yellow",label:"Intermédio"}; return{color:"red",label:"Risco para a saúde"}; }

function calculateRespondent(answerById){ const bySubscale={}; for(const item of QUESTIONNAIRE){ const raw=(answerById[item.id]??"").trim(); const parsed = parseLikertValue(raw); if(parsed === null) throw new Error(`Valor inválido em ${item.id}. Pergunta: "${item.text}". Valor recebido: "${raw}". Esperado: 1..5 ou texto correspondente (ex.: Nunca/quase nunca, Raramente, Às vezes, Frequentemente, Sempre).`); let score=Number(parsed); if(item.reverse) score=6-score; if(!bySubscale[item.subscale]) bySubscale[item.subscale]={scores:[],favorableHigh:item.favorableHigh}; bySubscale[item.subscale].scores.push(score);} const subscales=Object.entries(bySubscale).map(([name,info])=>{ const mean=info.scores.reduce((a,b)=>a+b,0)/info.scores.length; return {name,mean:Number(mean.toFixed(2)),...classifyTercil(mean,info.favorableHigh),favorableHigh:info.favorableHigh};}); return {subscales}; }

function parseCsv(text){
  const lines=splitDelimitedRecords(text);
  if(lines.length<2) throw new Error("CSV sem dados.");

  // Regra fixa solicitada: primeira linha é sempre o cabeçalho.
  const bestHeaderIdx = 0;
  const bestDelimiter = detectDelimiter(lines[bestHeaderIdx]);
  const headers=parseDelimitedLine(lines[bestHeaderIdx], bestDelimiter);
  const required=QUESTIONNAIRE.map((q)=>q.id);
  let canonicalToIndex=buildCanonicalIndex(headers);

  // Regra principal para o formato fixo informado pelo utilizador:
  // cada pergunta vem em tríade [Pergunta, Pontos - Pergunta, Comentários - Pergunta].
  // Portanto devemos priorizar SEMPRE a coluna de Pontos para q1..q76.
  const strictTripletMap = buildStrictTripletMappingFromQuestions(headers);
  QUESTIONNAIRE.forEach((q) => {
    if (strictTripletMap[q.id] !== undefined) canonicalToIndex[q.id] = strictTripletMap[q.id];
  });

  // Fallback: alguns exports trazem TODAS as respostas em colunas "Pontos – ..."
  // na ordem do questionário, com colunas administrativas antes (Cargo/Setor).
  const sequentialPontos = buildSequentialPontosIndex(headers);
  if (sequentialPontos) {
    // Regra mais forte para exports de formulário:
    // quando houver sequência suficiente de colunas "Pontos – ...",
    // ela representa a ordem q1..q76 e deve prevalecer.
    const strictSequentialMap = {};
    for (let i = 0; i < 76; i += 1) {
      strictSequentialMap[`q${i + 1}`] = sequentialPontos.sequence[i];
    }
    canonicalToIndex = strictSequentialMap;
  }

  // Fallback extra por associação explícita pergunta->número:
  // para cada qN tenta localizar "Pontos + texto da pergunta" no cabeçalho.
  const normalizedHeaders = headers.map((h) => normalizeQuestionText(h));
  QUESTIONNAIRE.forEach((q, idx) => {
    const key = `q${idx + 1}`;
    if (canonicalToIndex[key] !== undefined) return;
    const qText = normalizeQuestionText(q.text);
    const byContains = normalizedHeaders.findIndex((h) => h.includes(qText) || qText.includes(h));
    if (byContains >= 0) canonicalToIndex[key] = byContains;
  });

  for(const col of required) {
    if(canonicalToIndex[col]===undefined) {
      throw new Error(`Coluna ausente: ${col}. Verifique se a planilha contém q1..q76, colunas 'Pontos – <pergunta>' ou os textos das perguntas.`);
    }
  }

  const respondents=[];
  for(let i=bestHeaderIdx+1;i<lines.length;i+=1){
    const cols=parseDelimitedLine(lines[i], bestDelimiter);

    // Ignora repetição de cabeçalho no meio do arquivo (se existir)
    const firstCell = String(cols[0] || "").trim().toLowerCase();
    if (firstCell === "id" || firstCell === "q1") continue;

    const answers={};
    required.forEach((q)=>{
      answers[q] = getLikertFromRow(cols, canonicalToIndex[q]);
    });

    // Só inclui linha se tiver ao menos 1 resposta Likert
    const validCount = required.reduce((acc, q) => acc + (isLikertValue(answers[q]) ? 1 : 0), 0);
    if (validCount === 0) continue;

    respondents.push(calculateRespondent(answers));
  }

  if (!respondents.length) throw new Error("Nenhuma linha de resposta válida encontrada após o cabeçalho.");
  return respondents;
}

function consolidateBatch(respondents){ const bySub={}; respondents.forEach((r)=>{ r.subscales.forEach((s)=>{ if(!bySub[s.name]) bySub[s.name]={means:[],favorableHigh:s.favorableHigh}; bySub[s.name].means.push(s.mean);});}); const subscales=Object.entries(bySub).map(([name,info])=>{ const mean=info.means.reduce((a,b)=>a+b,0)/info.means.length; return {name,mean:Number(mean.toFixed(2)),respondents:info.means.length,...classifyTercil(mean,info.favorableHigh)};}); return {generatedAt:new Date().toISOString(),respondentCount:respondents.length,totalQuestions:76,subscales,questionnaire:QUESTIONNAIRE}; }

function renderConsolidatedReport(report){ document.getElementById("report-empty").classList.add("hidden"); document.getElementById("report-content").classList.remove("hidden"); document.getElementById("total-respondents").textContent=String(report.respondentCount); document.getElementById("global-index").textContent="Interpretação fator a fator (sem escore único)."; const container=document.getElementById("dimension-results"); container.innerHTML=""; report.subscales.forEach((s)=>{ const row=document.createElement("div"); row.className="result-row"; row.innerHTML=`<div><strong>${s.name}</strong></div><div>Média: ${s.mean} (1-5)</div><div>Respondentes: ${s.respondents}</div><div class="badge ${s.color==="green"?"low":s.color==="yellow"?"medium":"high"}">${s.label}</div>`; container.appendChild(row);}); }
function analyzeCsvBase(){ const file=document.getElementById("csv-input").files?.[0]; if(!file) return alert("Selecione a planilha CSV."); file.text().then((text)=>{ try{ const respondents=parseCsv(text); const report=consolidateBatch(respondents); window.__LAST_BATCH_REPORT__=report; renderConsolidatedReport(report); document.getElementById("base-summary").textContent=`Planilha analisada: ${report.respondentCount} colaboradores, 29 subescalas.`; } catch(e){ alert(e.message);} });}
function downloadBatchJson(){ if(!window.__LAST_BATCH_REPORT__) return alert("Analise a planilha antes de exportar."); const blob=new Blob([JSON.stringify(window.__LAST_BATCH_REPORT__,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="relatorio-copsoq-consolidado.json"; a.click(); }
function getRiskSummary(subscales) {
  let green = 0;
  let yellow = 0;
  let red = 0;
  subscales.forEach((s) => {
    if (s.color === "green") green += 1;
    else if (s.color === "yellow") yellow += 1;
    else red += 1;
  });
  return { green, yellow, red, total: subscales.length };
}

function drawTableRow(doc, y, cols, widths, opts = {}) {
  const x0 = 40;
  const h = opts.height || 20;
  let x = x0;
  if (opts.fillColor) {
    doc.setFillColor(...opts.fillColor);
    doc.rect(x0, y - 14, widths.reduce((a, b) => a + b, 0), h, "F");
  }
  doc.setDrawColor(210, 210, 210);
  doc.rect(x0, y - 14, widths.reduce((a, b) => a + b, 0), h);
  for (let i = 0; i < cols.length; i += 1) {
    doc.text(String(cols[i]), x + 4, y);
    x += widths[i];
    if (i < cols.length - 1) doc.line(x, y - 14, x, y + 6);
  }
  return y + h;
}

function riskColor(color) {
  if (color === "red") return [198, 40, 40];
  if (color === "yellow") return [194, 124, 14];
  return [28, 138, 67];
}

function downloadBatchPdf(){
  if(!window.__LAST_BATCH_REPORT__) return alert("Analise a planilha antes de baixar PDF.");
  const report=window.__LAST_BATCH_REPORT__;
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:"pt",format:"a4"});

  const pageW = doc.internal.pageSize.getWidth();
  const margin = 40;
  let y = 44;

  const ensureSpace = (needed = 24) => {
    if (y + needed > 790) { doc.addPage(); y = 44; }
  };

  const h1 = (t) => { ensureSpace(28); doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.text(t, margin, y); y += 24; };
  const h2 = (t) => { ensureSpace(22); doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.text(t, margin, y); y += 18; };
  const p = (t) => {
    doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    const lines = doc.splitTextToSize(t, pageW - margin * 2);
    ensureSpace(lines.length * 13 + 8);
    doc.text(lines, margin, y); y += lines.length * 13 + 6;
  };

  const summary = getRiskSummary(report.subscales);
  const riskPct = ((summary.red / summary.total) * 100).toFixed(1);

  h1("RELATÓRIO DE AVALIAÇÃO DE RISCOS PSICOSSOCIAIS");

  h2("INFORMAÇÕES DA AVALIAÇÃO");
  doc.setFontSize(10);
  y = drawTableRow(doc, y, ["Campo", "Valor"], [200, 315], { fillColor: [240, 245, 255] });
  y = drawTableRow(doc, y, ["Data da Avaliação", new Date(report.generatedAt).toLocaleString("pt-BR")], [200, 315]);
  y = drawTableRow(doc, y, ["Total de Colaboradores", report.respondentCount], [200, 315]);
  y = drawTableRow(doc, y, ["Total de Itens COPSOQ", report.totalQuestions], [200, 315]);
  y += 12;

  h2("RESUMO EXECUTIVO");
  p(`Esta avaliação consolidada analisou ${report.respondentCount} colaboradores na versão média portuguesa do COPSOQ II (76 itens, 29 subescalas). Foram identificadas ${summary.red} subescalas em risco (vermelho), ${summary.yellow} em nível intermédio (amarelo) e ${summary.green} em situação favorável (verde). Percentual de subescalas em risco: ${riskPct}%.`);

  h2("INDICADORES GERAIS");
  y = drawTableRow(doc, y, ["Indicador", "Valor", "Interpretação"], [180, 90, 245], { fillColor: [240, 245, 255] });
  y = drawTableRow(doc, y, ["Subescalas avaliadas", summary.total, "Abrangência da avaliação"] , [180, 90, 245]);
  y = drawTableRow(doc, y, ["Risco (vermelho)", summary.red, "Exposição desfavorável para saúde"] , [180, 90, 245]);
  y = drawTableRow(doc, y, ["Intermédio (amarelo)", summary.yellow, "Monitoramento recomendado"] , [180, 90, 245]);
  y = drawTableRow(doc, y, ["Favorável (verde)", summary.green, "Condição adequada"] , [180, 90, 245]);
  y = drawTableRow(doc, y, ["Percentual em risco", `${riskPct}%`, summary.red > 0 ? "Requer plano de ação" : "Sem risco relevante"] , [180, 90, 245]);

  y += 14;
  h2("ANÁLISE DETALHADA POR SUBESCALA");
  y = drawTableRow(doc, y, ["Subescala", "Média", "Classificação"], [300, 80, 135], { fillColor: [240, 245, 255] });
  report.subscales.forEach((s) => {
    ensureSpace(22);
    doc.setTextColor(...riskColor(s.color));
    y = drawTableRow(doc, y, [s.name, s.mean.toFixed ? s.mean.toFixed(2) : s.mean, s.label], [300, 80, 135]);
    doc.setTextColor(20, 20, 20);
  });

  h2("RECOMENDAÇÕES E PLANO DE AÇÃO");
  p("1) Priorizar intervenções nas subescalas em vermelho. 2) Definir responsáveis, prazos e indicadores para cada ação. 3) Reavaliar em ciclos semestrais para monitoramento de tendência. 4) Manter participação de liderança, saúde ocupacional e trabalhadores no plano de prevenção.");

  h2("ANEXO I — METODOLOGIA");
  p("Questionário: COPSOQ II — Versão Média Portuguesa (76 itens). Escala de resposta: 1 a 5. Itens invertidos: 42 e 45. Interpretação por subescala (fator a fator) com semáforo por tercis: <=2,33; >2,33 e <3,66; >=3,66.");

  h2("ANEXO II — PERGUNTAS DA METODOLOGIA (q1..q76)");
  report.questionnaire.forEach((q, idx) => {
    ensureSpace(14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const text = `${idx + 1}. ${q.text}`;
    const lines = doc.splitTextToSize(text, pageW - margin * 2);
    doc.text(lines, margin, y);
    y += lines.length * 11;
  });

  doc.save("relatorio-copsoq-consolidado.pdf");
}


validateQuestionnaireConfig();
document.getElementById("analyze-base-btn").addEventListener("click", analyzeCsvBase);
document.getElementById("download-batch-json-btn").addEventListener("click", downloadBatchJson);
document.getElementById("download-batch-pdf-btn").addEventListener("click", downloadBatchPdf);
