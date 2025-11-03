///<reference types="Cypress" />


import { QantasSelectors } from '../support/selectors/qantasPages';

describe('Qantas Money App Tests', () => {
 

  it('AC1: Verify Google Play button redirects correctly', () => {
    cy.visit(Cypress.env('moneyApp'))

      cy.get(QantasSelectors.googlePlayBtn)
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.equal('/app/android')

        cy.origin(Cypress.env('googlePlay'), () => {
          const expectedURL = Cypress.env('redirectURLFromMoney')

          cy.visit('/store/apps/details?id=com.qantas.fs')
          cy.url().should('include', expectedURL)
        });
    })
  });


 it('AC2: Verify Qanats Money redirects to Login page', () => {
    cy.visit(Cypress.env('baseUrl'));
    
    cy.closeModalIfVisible();

    cy.get(QantasSelectors.loginButton).trigger('mouseover')
    cy.get(QantasSelectors.loginDropdown)
    .contains('Qantas Money')
    .click({force:true})
  });

  

  it('AC3: Verify Qantas message for Acknowledgement of Country in footer', () => {
    const pages = [
      Cypress.env('baseUrl'),
      Cypress.env('buyCurrency')
    ];

    pages.forEach(page => {
      cy.visit(page);
      cy.closeModalIfVisible();

      cy.get(QantasSelectors.footerMessage).contains(Cypress.env('qantasFooterMessage')).should('be.visible');
    });
  });

  it('AC4: Verify Qantas Points using Currency Calculator for AUD 2500', () => {
    cy.visit(Cypress.env('buyCurrency'));
    cy.get(QantasSelectors.currencyInputInAUD)
      .clear()
      .type(Cypress.env('amountInAUD'));
    cy.get(QantasSelectors.pointsDisplay)
      .should('contain', Cypress.env('qantasPoints'));
  });
  

});

