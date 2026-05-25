# COPSOQ II – Versão Média Portuguesa (76 itens)

Aplicação web para análise automática de planilha CSV/XLSX (`q1..q76`) com base nas perguntas da versão portuguesa enviadas.

## Implementado
- Perguntas `q1..q76` com textos completos.
- 29 subescalas da versão média.
- Itens invertidos: `q42` e `q45`.
- Escala esperada por resposta: `1..5`.
- Semáforo por tercis: `<=2,33`, `]2,33;3,66[`, `>=3,66`.
- Exportação consolidada em JSON e PDF.

## Formato da planilha
- Arquivos aceitos: `.csv`, `.cvs`, `.xlsx`, `.xls`
- Cabeçalho obrigatório com colunas: `q1,q2,...,q76`
- Cada linha = 1 colaborador
- Valores permitidos: `1,2,3,4,5`

> Observação: alguns exportadores geram a extensão `.cvs` por engano; esta aplicação também aceita esse formato.

## Troubleshooting de conflitos no GitHub
- Se o botão **Mark as resolved** estiver desabilitado mesmo com `0 conflicts`, rode:
  - `./scripts/check-conflicts.sh`
- Se o script acusar marcadores, remova `<<<<<<<`, `=======`, `>>>>>>>` e faça novo commit.
- Se não houver marcadores, faça um novo commit (mesmo pequeno) e atualize a PR: o GitHub às vezes mantém estado antigo no editor de conflitos.
