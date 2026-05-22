# COPSOQ II – Versão Média Portuguesa (76 itens)

Aplicação web para análise automática de planilha CSV (`q1..q76`) com base nas perguntas da versão portuguesa enviadas.

## Implementado
- Perguntas `q1..q76` com textos completos.
- 29 subescalas da versão média.
- Itens invertidos: `q42` e `q45`.
- Escala esperada por resposta: `1..5`.
- Semáforo por tercis: `<=2,33`, `]2,33;3,66[`, `>=3,66`.
- Exportação consolidada em JSON e PDF.

## Formato da planilha
- Cabeçalho obrigatório com colunas: `q1,q2,...,q76`
- Cada linha = 1 colaborador
- Valores permitidos: `1,2,3,4,5`
