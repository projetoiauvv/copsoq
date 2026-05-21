# COPSOQ II – Versão Média (App de Relatório)

Aplicativo web simples (HTML/CSS/JS puro) para:

1. Coletar respostas de um formulário COPSOQ II (versão média).
2. Calcular escores por dimensão em escala 0–100.
3. Gerar relatório visual e exportar JSON dos resultados.

## Como usar

Basta abrir `index.html` no navegador.

> Opcional: servir localmente com Python
>
> ```bash
> python3 -m http.server 8000
> ```
>
> Depois acesse `http://localhost:8000`.

## Estrutura

- `index.html`: interface do formulário e relatório.
- `styles.css`: estilos visuais.
- `app.js`: configuração das perguntas, cálculo e renderização do relatório.

## Importante (metodologia)

Este projeto já está pronto para uso técnico, mas você deve substituir/adaptar o conteúdo de `QUESTIONNAIRE` com a versão oficial da sua instituição (itens, chaves e mapeamento das dimensões) para manter aderência total à versão COPSOQ II – Versão Média que você adotou.

## Regras de cálculo implementadas

- Conversão Likert (5 pontos) para 0–100: `0, 25, 50, 75, 100`.
- Itens reversos: score invertido (`100 - valor`).
- Score da dimensão: média simples dos itens válidos.
- Índice geral psicossocial: média das dimensões.
- Classificação:
  - `0–33`: atenção baixa
  - `34–66`: atenção moderada
  - `67–100`: atenção alta

