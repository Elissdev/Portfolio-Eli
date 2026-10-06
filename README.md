# Portfólio de QA Automation | Elissandra Silva (Eli)

[![Cypress UI Tests](https://github.com/Elissdev/Portfolio-Eli/actions/workflows/cypress.yml/badge.svg)](https://github.com/Elissdev/Portfolio-Eli/actions/workflows/cypress.yml)

Sou a Elissandra (Eli), QA Automation e SDET Júnior. Trabalho com automação de testes e qualidade de software e uso este repositório também como laboratório de qualidade.

Este repositório contém o código-fonte do meu portfólio pessoal e, mais importante, a **suíte de testes automatizados** e a **esteira de CI/CD** que estruturam e validam a qualidade deste projeto em tempo real.

## Stack Tecnológica deste Repositório
* **Frontend:** HTML5, Tailwind CSS e CSS nativo (Flexbox/Grid)
* **Automação E2E:** Cypress
* **Relatórios de Teste:** Mochawesome & Puppeteer (Geração de PDF)
* **Integração Contínua (CI):** GitHub Actions

## Build do CSS (Tailwind)
O CSS utilitário é gerado localmente a partir de `src/input.css` (Tailwind v4) — **não usamos CDN em produção**.

* Gerar uma vez (minificado): `npm run build:css`
* Rebuild automático durante o desenvolvimento: `npm run watch:css`

> Depois de alterar classes utilitárias no `index.html`, rode `npm run build:css` para atualizar o `output.css`.

## Arquitetura do Processo de Qualidade
Para manter esta vitrine funcionando e dar visibilidade à qualidade do projeto, implementei uma esteira de automação que roda a cada atualização de código:
1.  **Sanity Check Automatizado:** O Cypress sobe o site localmente e valida elementos visuais críticos e os links de contato e projetos a cada push.
2.  **Integração Contínua:** O GitHub Actions orquestra a execução na nuvem.
3.  **Geração de Evidências:** A esteira gera automaticamente um relatório visual via Mochawesome, converte para PDF utilizando o Puppeteer e anexa o artefato final com a data da execução diretamente na aba Actions.

## Como rodar os testes localmente
Quer ver o robô do Cypress rodando este projeto na sua máquina? Siga os passos:

1. Clone este repositório:
   `git clone https://github.com/Elissdev/Portfolio-Eli.git`
2. Entre na pasta do projeto e instale as dependências de teste:
   `npm install`
3. Gere o CSS do site:
   `npm run build:css`
4. Abra a interface do Cypress:
   `npx cypress open`
5. Selecione "E2E Testing" e rode o arquivo `portfolio.cy.js`.

## Bora conversar?
[LinkedIn](https://www.linkedin.com/in/elissandra-silva-750b9b108/) | [GitHub](https://github.com/Elissdev) | [E-mail](mailto:elissandra.dev@gmail.com)