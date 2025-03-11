describe('Central de Atendimento ao Cliente TAT', () => {
  const localServer = 'src/index.html';


  const fullNameInput = 'input[name="firstName"]';
  const lastNameInput = 'input[name="lastName"]';
  const emailInput = 'input[name="email"]#email';
  const phoneInput = 'input[name="phone"]#phone';
  const messageInput = 'textarea[name="message"]';
  const submitButton = 'button[type="submit"]';


  it('verifica o título da aplicação', () => {
    cy.visit(localServer)
    cy.title('h1').should('contain', 'Central de Atendimento ao Cliente TAT')
  })

  it('verifica se o campo de busca está visível', () => {
    cy.visit(localServer)
    cy.get(fullNameInput).should('be.visible')
  })

  it('verifica se o campo "nome" foi digitado corretamente', () => {
    cy.visit(localServer)
    cy.get(fullNameInput)
    .type('Teste de campo de texto')
    .should('have.value', 'Teste de campo de texto')
  })

  it('verifica se o campo de "sobrenome" foi digitado corretamente', () => {
    cy.visit(localServer)
    cy.get(lastNameInput)
    .type('Teste de campo lastName')
    .should('have.value', 'Teste de campo lastName')
  })

  it('verifica se o campo de "email" foi digitado corretamente', () => {
    cy.visit(localServer)
    cy.get(emailInput)
    .type('teste@gmail.com')
    .should('have.value', 'teste@gmail.com')
  })

  it('verifica se o campo de "telefone" foi digitado corretamente', () => {
    cy.visit(localServer)
    cy.get(phoneInput)
    .type('99999999')
    
    cy.get(phoneInput).should('have.value', '99999999')
  })


})
