describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });  

  it('successfully loads', () => {
    cy.visit('http://localhost:5173')
  })
})