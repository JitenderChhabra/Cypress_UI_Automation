/// <reference types="Cypress" />

describe('My Fourth Test', () => {

it('Handling pop ups and confirm pop us with 2 buttons, new tabs', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //Handling alerts
  //Cypress itself handle the alert by clicking on OK button on alert.
  cy.get('#alertbtn').click()
  

  //Verify the Alert Text using window:alert
  cy.on('window:alert',(str) => {
    //mocha assertion
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
  })

  cy.get('#confirmbtn').click()

  //Verify the confirm alert text using window:confirm
  cy.on('window:confirm',(str2) => {
    expect(str2).to.equal('Hello , Are you sure you want to confirm?')
  })

  //Example where link opens into new tab, Cypress can't handle or run commands on new tab.
  //Workaround is to open the new tab into same mother window.
  // Using invoke (jquery) command allows uus to remove a specific attribute (target) which open the new tab.
  cy.get('#opentab').invoke('removeAttr','target').click()


  //Verify that new child page opens in same window or not through URL.
  cy.url().should('include','qaclickacademy')

  //Example o how to go back to the original window.
  cy.go('back')

})
})
