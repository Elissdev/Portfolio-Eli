describe('Testes de Sanidade do Portfólio', () => {
  it('Deve carregar a página e validar as seções principais', () => {
    // 1. Acessa o ambiente de produção
    cy.visit('/')

    // 2. Hero: título, subtítulo e botões principais
    cy.contains('Eli, Analista de Testes | QA').should('be.visible')
    cy.contains('Testes manuais e automatizados, testes de API e IA aplicada ao QA.').should('be.visible')
    cy.get('a[href="assets/curriculo-elissandra-silva-qa-junior.pdf"]').should('exist')
    cy.get('a[href="#projetos"]').contains('Conheça meus projetos').should('be.visible')

    // 3. Seção Sobre mim
    cy.contains('Sobre mim').should('be.visible')

    // 4. Seção Tecnologias e ferramentas
    cy.contains('Tecnologias e ferramentas').should('be.visible')
    cy.contains('Testes exploratórios').should('be.visible')
    cy.contains('Testes de API').should('be.visible')
    cy.contains('IA aplicada ao QA').should('be.visible')
    cy.contains('Bruno').should('be.visible')
    cy.contains('Apiário Dev').should('be.visible')

    // 5. Experiência prática em QA (projetos corporativos)
    cy.contains('Experiência prática em QA').should('be.visible')
    cy.contains('Codamos').should('be.visible')
    cy.contains('Projeto corporativo privado').should('exist')
    cy.contains('Indicadores e relatórios de qualidade').should('be.visible')
    cy.contains('IA aplicada ao QA com o Apiário Dev').should('be.visible')

    // 6. Projetos e laboratório de QA
    cy.contains('Projetos e laboratório de QA').should('be.visible')
    cy.contains('Projetos em destaque').should('be.visible')
    cy.contains('Destaque').should('be.visible')
    cy.contains('Ver todos os projetos e laboratórios').click()
    cy.contains('Bilheteria API').should('be.visible')
    cy.contains('API de Catraca Virtual').should('be.visible')
    cy.contains('Apiário Dev como provider nativo').should('be.visible')
    cy.contains('tl;dr').should('be.visible')

    // 7. Como eu trabalho / Atualmente estudando
    cy.contains('Como eu trabalho').should('be.visible')
    cy.contains('Atualmente estudando').should('be.visible')

    // 8. Contato: links de redes sociais e e-mail
    cy.contains('Vamos conversar?').should('be.visible')
    cy.get('a[href="https://www.linkedin.com/in/elissandra-silva-750b9b108/"]').should('exist')
    cy.get('a[href="https://github.com/Elissdev"]').should('exist')
    cy.get('a[href="mailto:elissandra.dev@gmail.com"]').should('exist')

    // 9. Rodapé
    cy.contains('© 2026 Elissandra Silva').should('be.visible')
  })
})
