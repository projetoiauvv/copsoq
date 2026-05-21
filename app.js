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

function parseCsvLine(line) { const out=[]; let cur=""; let inQuotes=false; for(let i=0;i<line.length;i+=1){const ch=line[i]; if(ch==='"'){ if(inQuotes&&line[i+1]==='"'){cur+='"'; i+=1;} else inQuotes=!inQuotes;} else if(ch===","&&!inQuotes){out.push(cur.trim()); cur="";} else cur+=ch;} out.push(cur.trim()); return out; }


function normalizeHeaderName(value) {
  return String(value || "")
    .replace(/^﻿/, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-\.]/g, "");
}

function toCanonicalQuestionKey(value) {
  const v = normalizeHeaderName(value);
  const m = v.match(/^q(?:uest(?:ao|ão)?|uestion)?(\d{1,3})$/i) || v.match(/^(\d{1,3})$/);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isInteger(n) || n < 1 || n > 76) return null;
  return `q${n}`;
}

function classifyTercil(mean, favorableHigh){ if(favorableHigh){ if(mean<=2.33)return{color:"red",label:"Risco para a saúde"}; if(mean<3.66)return{color:"yellow",label:"Intermédio"}; return{color:"green",label:"Situação favorável"}; } if(mean<=2.33)return{color:"green",label:"Situação favorável"}; if(mean<3.66)return{color:"yellow",label:"Intermédio"}; return{color:"red",label:"Risco para a saúde"}; }

function calculateRespondent(answerById){ const bySubscale={}; for(const item of QUESTIONNAIRE){ const raw=(answerById[item.id]??"").trim(); if(!/^[1-5]$/.test(raw)) throw new Error(`Valor inválido em ${item.id}: esperado 1..5.`); let score=Number(raw); if(item.reverse) score=6-score; if(!bySubscale[item.subscale]) bySubscale[item.subscale]={scores:[],favorableHigh:item.favorableHigh}; bySubscale[item.subscale].scores.push(score);} const subscales=Object.entries(bySubscale).map(([name,info])=>{ const mean=info.scores.reduce((a,b)=>a+b,0)/info.scores.length; return {name,mean:Number(mean.toFixed(2)),...classifyTercil(mean,info.favorableHigh),favorableHigh:info.favorableHigh};}); return {subscales}; }

function parseCsv(text){ const lines=text.trim().split(/\r?\n/).filter(Boolean); if(lines.length<2) throw new Error("CSV sem dados."); const headers=parseCsvLine(lines[0]); const required=QUESTIONNAIRE.map((q)=>q.id); const canonicalToIndex={}; headers.forEach((h,i)=>{ const canonical=toCanonicalQuestionKey(h); if(canonical&&canonicalToIndex[canonical]===undefined) canonicalToIndex[canonical]=i; }); for(const col of required) if(canonicalToIndex[col]===undefined) throw new Error(`Coluna ausente: ${col}. Cabeçalhos aceitos incluem q1..q76, Q1..Q76, q_1, q-1, pergunta1 e variações.`); const respondents=[]; for(let i=1;i<lines.length;i+=1){ const cols=parseCsvLine(lines[i]); const answers={}; required.forEach((q)=>{answers[q]=cols[canonicalToIndex[q]]??"";}); respondents.push(calculateRespondent(answers)); } return respondents; }

function consolidateBatch(respondents){ const bySub={}; respondents.forEach((r)=>{ r.subscales.forEach((s)=>{ if(!bySub[s.name]) bySub[s.name]={means:[],favorableHigh:s.favorableHigh}; bySub[s.name].means.push(s.mean);});}); const subscales=Object.entries(bySub).map(([name,info])=>{ const mean=info.means.reduce((a,b)=>a+b,0)/info.means.length; return {name,mean:Number(mean.toFixed(2)),respondents:info.means.length,...classifyTercil(mean,info.favorableHigh)};}); return {generatedAt:new Date().toISOString(),respondentCount:respondents.length,totalQuestions:76,subscales,questionnaire:QUESTIONNAIRE}; }

function renderConsolidatedReport(report){ document.getElementById("report-empty").classList.add("hidden"); document.getElementById("report-content").classList.remove("hidden"); document.getElementById("total-respondents").textContent=String(report.respondentCount); document.getElementById("global-index").textContent="Interpretação fator a fator (sem escore único)."; const container=document.getElementById("dimension-results"); container.innerHTML=""; report.subscales.forEach((s)=>{ const row=document.createElement("div"); row.className="result-row"; row.innerHTML=`<div><strong>${s.name}</strong></div><div>Média: ${s.mean} (1-5)</div><div>Respondentes: ${s.respondents}</div><div class="badge ${s.color==="green"?"low":s.color==="yellow"?"medium":"high"}">${s.label}</div>`; container.appendChild(row);}); }
function analyzeCsvBase(){ const file=document.getElementById("csv-input").files?.[0]; if(!file) return alert("Selecione a planilha CSV."); file.text().then((text)=>{ try{ const respondents=parseCsv(text); const report=consolidateBatch(respondents); window.__LAST_BATCH_REPORT__=report; renderConsolidatedReport(report); document.getElementById("base-summary").textContent=`Planilha analisada: ${report.respondentCount} colaboradores, 29 subescalas.`; } catch(e){ alert(e.message);} });}
function downloadBatchJson(){ if(!window.__LAST_BATCH_REPORT__) return alert("Analise a planilha antes de exportar."); const blob=new Blob([JSON.stringify(window.__LAST_BATCH_REPORT__,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="relatorio-copsoq-consolidado.json"; a.click(); }
function downloadBatchPdf(){ if(!window.__LAST_BATCH_REPORT__) return alert("Analise a planilha antes de baixar PDF."); const report=window.__LAST_BATCH_REPORT__; const {jsPDF}=window.jspdf; const doc=new jsPDF({unit:"pt",format:"a4"}); let y=40; doc.text("COPSOQ II PT - Relatório consolidado",40,y); y+=20; doc.text(`Respondentes: ${report.respondentCount}`,40,y); y+=16; report.subscales.forEach((s,i)=>{ if(y>780){doc.addPage(); y=40;} doc.text(`${i+1}. ${s.name}: ${s.mean} - ${s.label}`,40,y); y+=14;}); doc.save("relatorio-copsoq-consolidado.pdf"); }

validateQuestionnaireConfig();
document.getElementById("analyze-base-btn").addEventListener("click", analyzeCsvBase);
document.getElementById("download-batch-json-btn").addEventListener("click", downloadBatchJson);
document.getElementById("download-batch-pdf-btn").addEventListener("click", downloadBatchPdf);
