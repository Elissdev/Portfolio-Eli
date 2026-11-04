describe('Testes de Sanidade do Portfólio', () => {
  it('Deve carregar a página e validar as seções principais', () => {
    // 1. Acessa o ambiente
    cy.visit('/')

    // 2. Hero: título, subtítulo e botões principais
    cy.contains('Eli · Suporte a aplicações e QA').should('be.visible')
    cy.contains('Diagnóstico de falhas, leitura de logs, SQL e APIs.').should('be.visible')
    cy.get('a[href="assets/curriculo-elissandra-silva-suporte-qa.pdf"]').should('exist')
    cy.get('a[href="#projetos"]').contains('Conheça meus projetos').should('be.visible')

    // 3. Seção Sobre mim
    cy.contains('Sobre mim').should('be.visible')

    // 4. Tecnologias e ferramentas
    cy.contains('Tecnologias e ferramentas').should('be.visible')
    cy.contains('Suporte e operações').should('be.visible')
    cy.contains('Análise de logs').should('be.visible')
    cy.contains('Atendimento N1').should('be.visible')
    cy.contains('Jira').should('be.visible')
    cy.contains('Testes exploratórios').should('be.visible')
    cy.contains('Testes de API').should('be.visible')
    cy.contains('IA aplicada ao QA').should('be.visible')
    cy.contains('Bruno').should('be.visible')
    cy.contains('Apiário Dev').should('be.visible')

    // 5. Experiência em suporte e QA
    cy.contains('Experiência em suporte e QA').should('be.visible')
    cy.contains('Atendimento de chamados e diagnóstico de falhas').should('be.visible')
    cy.contains('Monitoramento de alertas e indicadores').should('be.visible')
    cy.contains('Codamos').should('be.visible')
    cy.contains('Projeto corporativo privado').should('exist')
    cy.contains('Indicadores e relatórios de qualidade').should('be.visible')
    cy.contains('IA aplicada ao QA com o Apiário Dev').should('be.visible')

    // 6. Projetos e laboratório de suporte e QA
    cy.contains('Projetos e laboratório de suporte e QA').should('be.visible')
    cy.contains('Projetos em destaque').should('be.visible')
    cy.contains('Destaque').should('be.visible')
    cy.contains('Ver todos os projetos e laboratórios').click()
    cy.contains('Lab de Suporte a Aplicações').should('be.visible')
    cy.contains('Bilheteria API').should('be.visible')
    cy.contains('API de Catraca Virtual').should('be.visible')
    cy.contains('Apiário Dev como provider nativo').should('be.visible')
    cy.contains('tl;dr').should('be.visible')

    // 7. Como eu trabalho / Atualmente estudando
    cy.contains('Como eu trabalho').should('be.visible')
    cy.contains('Atualmente estudando').should('be.visible')
    cy.contains('ITIL (fundamentos)').should('be.visible')

    // 8. Contato: links de redes sociais e e-mail
    cy.contains('Vamos conversar?').should('be.visible')
    cy.get('a[href="https://www.linkedin.com/in/elissandra-silva-750b9b108/"]').should('exist')
    cy.get('a[href="https://github.com/Elissdev"]').should('exist')
    cy.get('a[href="mailto:elissandra.dev@gmail.com"]').should('exist')

    // 9. Rodapé
    cy.contains('© 2026 Elissandra Silva').should('be.visible')
    cy.contains('Suporte a aplicações | QA').should('be.visible')
  })
})
