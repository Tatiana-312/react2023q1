describe('React "Rick and Morty" app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('should routers work', () => {
    cy.contains('About').click();
    cy.get('h1').should('contain', 'about page');
    cy.get('h2').should('contain', 'About our Book Shop');
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.get('h1').should('contain', 'form page');
    cy.url().should('include', '/form');
    cy.contains('Home').click();
    cy.get('h1').should('contain', 'home page');
    cy.get('h2').should('contain', 'Rick and Morty');
  });
  describe('Home page', () => {
    it('should search work according to the input value', () => {
      cy.get('._input_13s7j_17').type('Morty').and('be.focused');
      cy.get('._input_13s7j_17').should('have.value', 'Morty');
      cy.get('._button_13s7j_43').click();
      cy.get('._card__title_1wj5z_69').filter(':contains("Morty")').should('have.length', 20);
    });

    it('should open specific modal window and then close it', () => {
      cy.get('[data-testid="card-button6"]').click();
      cy.get('.modal__content').should('exist');
      cy.contains('Abadango');
      cy.get('.close__button').click();
      cy.get('.modal__content').should('not.exist');
    });

    it('should show request error when incorrect input', () => {
      cy.get('._input_13s7j_17').type('hfg5').and('be.focused');
      cy.get('._button_13s7j_43').click();
      cy.get('[alt="Oops!"]').should('exist');
      cy.contains('Character cannot be found!');
    });
  });
});
