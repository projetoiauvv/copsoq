# COPSOQ II – Versão Média (76 perguntas)

Aplicação web para análise **obrigatória das 76 perguntas** do COPSOQ II – Versão Média.

## O que foi ajustado

- O sistema agora valida que o questionário possui exatamente **76 itens**.
- Inclui análise de resposta individual (formulário).
- Inclui análise de **base completa CSV** com colunas `q1..q76`.
- Exporta relatório individual em JSON e PDF.

## Formato da base CSV

A primeira linha deve conter cabeçalhos incluindo obrigatoriamente:

`q1,q2,q3,...,q76`

Cada linha seguinte representa um respondente com valores de 0 a 4.

## Observação técnica

A estrutura de perguntas está pronta com 76 itens e processamento completo. Para aderência literal ao seu documento oficial, edite no `app.js` os campos `text`, `dimension` e `reverse` de cada item em `QUESTIONNAIRE`, mantendo os IDs `q1..q76`.
