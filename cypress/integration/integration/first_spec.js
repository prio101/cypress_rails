describe('first spec', ()=>{
  it('Should visit the root page', () => {
    cy.visit('http://127.0.0.1:3000');
    cy.get('h1').should('have.text', 'This is an App Created for the Cypress Testing on Github.')
  })
})