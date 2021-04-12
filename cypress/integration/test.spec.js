it('we can visit app', () => {
  cy.visit('http://localhost:3000')
})

it('we type message', () => {
  cy.visit('http://localhost:3000')
  .get('.Chat').find('input').focus().type('Hello, World{enter}')
})

it('we send message', () => {
  cy.visit('http://localhost:3000')
  	.get('.Chat').find('input').focus().type('Hello, World{enter}')
  cy.get('.Chat').find('.Message').find('.Text').last()
  	.contains('Hello, World')
})