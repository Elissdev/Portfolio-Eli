# Portfólio de QA | Elissandra Silva (Eli)

[![Cypress UI Tests](https://github.com/Elissdev/Portfolio-Eli/actions/workflows/cypress.yml/badge.svg)](https://github.com/Elissdev/Portfolio-Eli/actions/workflows/cypress.yml)

Sou a Elissandra (Eli), Analista de Testes e QA Júnior. Trabalho com testes manuais e automação e uso este repositório também como laboratório de qualidade.

Este repositório contém o código-fonte do meu portfólio pessoal e, mais importante, a **suíte de testes automatizados** e a **esteira de CI/CD** que estruturam e validam a qualidade deste projeto em tempo real.

## Stack Tecnológica deste Repositório
* **Frontend:** HTML5, Tailwind CSS e CSS nativo (Flexbox/Grid)
* **Automação E2E:** Cypress
* **Relatórios de Teste:** Mochawesome & Puppeteer (Geração de PDF)
* **Integração Contínua (CI):** GitHub Actions

## Arquitetura do Processo de Qualidade
Para manter esta vitrine funcionando e dar visibilidade à qualidade do projeto, implementei uma esteira de automação que roda a cada atualização de código:
1.  **Sanity Check Automatizado:** O Cypress acessa o ambiente de produção e valida elementos visuais críticos e os links de contato e projetos.
2.  **Integração Contínua:** O GitHub Actions orquestra a execução na nuvem.
3.  **Geração de Evidências:** A esteira gera automaticamente um relatório visual via Mochawesome, converte para PDF utilizando o Puppeteer e anexa o artefato final com a data da execução diretamente na aba Actions.

## Como rodar os testes localmente
Quer ver o robô do Cypress rodando este projeto na sua máquina? Siga os passos:

1. Clone este repositório:
   `git clone https://github.com/Elissdev/Portfolio-Eli.git`
2. Entre na pasta do projeto e instale as dependências de teste:
   `npm install`
3. Abra a interface do Cypress:
   `npx cypress open`
4. Selecione "E2E Testing" e rode o arquivo `portfolio.cy.js`.

## Bora conversar?
[LinkedIn](https://www.linkedin.com/in/elissandra-silva-750b9b108/) | [GitHub](https://github.com/Elissdev) | [E-mail](mailto:elissandra.dev@gmail.com)