/// <reference types="cypress" />

describe('React "Rick and Morty" app', () => {
  it('should routers work', () => {
    cy.visit('/');
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
      cy.visit('/');
      cy.get('[data-testid="search-input"]').type('Morty').and('be.focused');
      cy.get('[data-testid="search-input"]').should('have.value', 'Morty');
      cy.get('[type="submit"]').click();
      cy.get('[data-testid="card-title"]').filter(':contains("Morty")').should('have.length', 20);
    });

    it('should open specific modal window and then close it', () => {
      cy.visit('/');
      cy.get('[data-testid="card-button6"]').click();
      cy.get('[data-testid="modal-content"]').should('exist');
      cy.contains('Abadango');
      cy.get('[data-testid="close-button"]').click();
      cy.get('[data-testid="modal-content"]').should('not.exist');
    });

    it('should show request error when incorrect input', () => {
      cy.visit('/');
      cy.get('[data-testid="search-input"]').type('hfg5').and('be.focused');
      cy.get('[type="submit"]').click();
      cy.get('[alt="Oops!"]').should('exist');
      cy.contains('Character cannot be found!');
    });
  });

  describe('Form page', () => {
    it('should validation work when empty fields', () => {
      cy.visit('/form');
      cy.get('input[type="submit"]').click();
      cy.get('input[data-testid="input-submit"]').click();
      cy.contains(
        'Name must start with a capital letter and contain more than 1 latin letter without spaces'
      );
      cy.contains('Cannot be selected earlier than the current date');
      cy.contains('Only images allowed');
      cy.contains('Please choose your country');
      cy.contains('Please select a payment method');
      cy.contains('Please check this box if you want to proceed');
      cy.get('[data-testid="cardList-container"]').should('be.empty').and('not.be.visible');
    });

    it('should show success message and create card', () => {
      cy.visit('/form');
      const currentDate = new Date();
      const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
      const correctTestDate = tomorrow.toISOString().split('T')[0];

      cy.get('input[name="name"]').type('Jerry');
      cy.get('input[name="date"]').type(correctTestDate);
      cy.get('input[type="file"]').selectFile('cypress/fixtures/react.jpg');
      cy.get('select').select('Belarus').should('have.value', 'Belarus');
      cy.get('input[data-testid="payment-first"]').check();
      cy.get('input[type="checkbox"]').check();
      cy.get('input[type="submit"]').click();
      cy.contains('Data saved successfully!');
      cy.get('div[data-testid="form-card"]').should('be.visible');
      cy.contains('Jerry');
      cy.contains(correctTestDate);
      cy.contains('Country');
      cy.contains('Payment method');
      cy.get('[alt="book cover"]').should('be.visible');
    });

    it('Some kind of crutch', () => {
      expect(true).to.equal(true);
    });
  });
});
