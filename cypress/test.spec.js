
it('we can visit app', () => {
  cy.visit('http://localhost:3000').login(email, pass)
})