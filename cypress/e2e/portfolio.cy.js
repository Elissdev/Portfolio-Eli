describe('Testes de Sanidade do Portfólio', () => {
  it('Deve carregar a página e validar as seções vitais e links de contato', () => {
    // 1. Acessa o ambiente de produção
    cy.visit('https://elissandra.codamos.com.br/')

    // 2. Valida a Seção da Bio
    cy.contains('cultura de qualidade').should('be.visible')

    // 3. Valida a Seção Corporativa
    cy.contains('Projeto Corporativo Privado').should('exist')

    // 4. Valida a Seção de Laboratório e Projetos Pessoais
    // Verifica se o título da seção apareceu
    cy.contains('Laboratório e Projetos Pessoais').should('be.visible')
    // Pega uma amostra de um dos cards para garantir que a grid renderizou
    cy.contains('Calculadora de Descontos').should('be.visible')

    // 5. Valida os Links do Rodapé (Redes Sociais e E-mail)
    // O comando cy.get() busca o botão pelo destino exato do link
    cy.get('a[href="https://www.linkedin.com/in/elissandra-silva-750b9b108/"]').should('exist')
    
    // Validando especificamente o seu repositório oficial e atual
    cy.get('a[href="https://github.com/Elissdev"]').should('exist')
    
    cy.get('a[href="mailto:elissandra.dev@gmail.com"]').should('exist')
  })
})