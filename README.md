# ForçaMente — página inicial do PFC

Projeto React criado para a atividade de Programação para Internet. O site apresenta o **ForçaMente**, uma plataforma de informação e capacitação para quem está começando na musculação. Sua proposta é resumida pelo lema **“Mais que músculos, conhecimento.”**

Esta entrega é um protótipo de apresentação do PFC. As interações desta atividade são demonstrativas e executadas no navegador; não há integração com a API ou com o banco de dados do projeto principal.

## Links da entrega

- **GitHub:** [ofelpys/atividade-pfc-forcamente](https://github.com/ofelpys/atividade-pfc-forcamente)
- **Vercel:** [atividade-pfc-forcamente.vercel.app](https://atividade-pfc-forcamente.vercel.app/)

## Páginas

O menu reúne seis páginas inspiradas nas seções do [site do ForçaMente](https://pfc-frontend-two.vercel.app/):

| Página | Rota | Conteúdo |
| --- | --- | --- |
| Home | `/` | Apresentação da proposta e acesso às demais seções. |
| Artigos | `/articles` | Quatro artigos com páginas próprias, busca por termo e filtro por assunto. |
| Quiz | `/quiz` | Cinco perguntas com explicação das respostas e resultado final. |
| Biblioteca | `/library` | Seis exercícios com imagens, busca, filtro por grupo muscular e detalhes expansíveis. |
| Calculadoras | `/progress` | Volume de um exercício e minutos semanais de atividade aeróbica moderada. |
| Quem somos | `/about` | Objetivo do PFC, equipe e fontes consultadas. |

O conteúdo de saúde e exercício tem finalidade educativa. Treinos e condições individuais devem ser avaliados por profissionais habilitados.

## Executar localmente

Instale o Node.js **22.12.0 ou superior**. Na pasta `atividade_pfc`, execute:

```bash
npm install
npm run dev
```

Abra o endereço local mostrado pelo Vite. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O comando de build gera a pasta `dist`.

## Estrutura

- `src/App.jsx`: componentes, páginas, navegação e interações.
- `src/content.js`: textos dos artigos, exercícios, quiz e fontes.
- `src/styles.css`: identidade visual e layout responsivo.
- `public/images/`: logo e imagens de exercícios adaptados do [front-end principal do PFC](https://github.com/forcamente2026/PFC-FRONTEND).
- `index.html`: entrada HTML usada pelo Vite.
- `package.json`: dependências e scripts; `vercel.json`: abertura direta das rotas na Vercel.
- `PROCESSO-IA.md`: registro do uso de IA e pontos de revisão humana.

## Publicar no GitHub e na Vercel

1. Publique esta pasta em um repositório GitHub. Caso ela permaneça dentro do repositório `Prog_para_internet`, mantenha `atividade_pfc` como subpasta do projeto.
2. Na Vercel, importe o repositório GitHub.
3. Se o repositório contiver outras atividades, defina **Root Directory** como `atividade_pfc`.
4. Selecione **Vite** como framework, `npm run build` como comando de build e `dist` como diretório de saída.
5. Faça o deploy e confira diretamente as seis páginas e um artigo, inclusive após atualizar uma rota no navegador. O arquivo `vercel.json` inclui a regra de reescrita necessária para as rotas do aplicativo.

Este repositório de atividade é distinto do [front-end principal do PFC](https://github.com/forcamente2026/PFC-FRONTEND). O projeto da Vercel está conectado a este repositório para publicar atualizações futuras da branch `main`.

## Referências para o conteúdo

- [Guia de Atividade Física para a População Brasileira — Ministério da Saúde](https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf)
- [Recomendações de atividade física — OMS](https://www.who.int/europe/news-room/fact-sheets/item/everyday-actions-for-better-health-who-recommendations)
- [Orientações para começar a se exercitar — CDC](https://www.cdc.gov/healthy-weight-growth/physical-activity/getting-started.html)
