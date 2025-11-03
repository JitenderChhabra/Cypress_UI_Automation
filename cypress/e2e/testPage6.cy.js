/// <reference types="Cypress" />

describe('My Sixth Test', () => {

it('Reaching to specific cell in table using Each method', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //Handling Mouse Hover using JQuery method. invoke('show')
  //Cypress do not able to handle Mouse Hover
  cy.get('div.mouse-hover-content').invoke('show')
  cy.contains('Top').click()
  //Verifying the top has been added into the URL
  cy.url().should('include','top') 

  //We can click on invisible elements forcefully through sypress command.
  //this way it will not mouse hover to show the invisible items.
  cy.contains('Top').click({force: true})
})
})
