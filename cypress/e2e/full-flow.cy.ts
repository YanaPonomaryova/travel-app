/// <reference types="cypress" />

describe('basic flow', () => {

  it('loads trips, filters, opens details, returns back', () => {

    cy.intercept('GET', 'http://localhost:3000/trips').as('getTrips');

    cy.visit('http://localhost:4200');

    cy.wait('@getTrips');

    cy.get('app-item-card').should('have.length.at.least', 2);

    cy.get('input[placeholder="Пошук..."]').type('Венеці');
    cy.wait(300);

    cy.get('app-item-card')
      .should('have.length', 1)
      .contains('Венеційська пригода');

    cy.get('app-item-card .details-btn').click({ force: true });

    cy.url().should('include', '/items/1');

    cy.contains('Місце').should('exist');
    cy.contains('Ціна').should('exist');
    cy.contains('Венеці').should('exist');

    cy.contains('Назад до списку').click({ force: true });

    cy.wait('@getTrips');

    cy.get('app-item-card').should('have.length.at.least', 2);
  });

});
