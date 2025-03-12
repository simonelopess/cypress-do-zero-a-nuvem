describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('host'))
  }) 

  it('verifica o título da aplicação', () => {
    cy.title().should('contain', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Simone')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#open-text-area').type('obrigada')
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })

  /* Exercício 1 */
  it('teste campo de texto longo com delay', () => {
    const longText = Cypress._.repeat('a1231232132132132132132112312312312321', 10) // repete uma string varias vezes

    cy.get('#open-text-area').type(longText, { delay: 0 })
  })

  /* Exercício 2 */
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Simone')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })

  /* Exercício 3 */
  it('campo telefone continua vazio quando preenchido com valor não númerico', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  /* Exercício 4 */
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Simone')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('teste@teste.com')

    cy.get('#phone-checkbox').click()

    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })
  
  /* Exercício 5 */ 
  it('exibe mensagem de erro ao submeter o formulário com um email vazio', () => {

    cy.get('#lastName')
      .type('Hello')
      .should('have.value', 'Hello')
      .clear()
      .should('have.value', '')
    
  })

  /* Exercício 6 */
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })


  /* COMANDO CUSTOMIZADO */
  it('envia o formuário com sucesso usando um comando customizado', () =>{
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })
})
