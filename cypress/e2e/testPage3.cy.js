/// <reference types="Cypress" />

describe('My Third Test', () => {

it('Playing with checkbox, Radio button, drop downs functionalities', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //Locate the checkbox, checked on it, Verify it checked, verify the value of checkbox
  //And use for concatenation of multiple assertions
  cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

  //Unchecking the checkbox and verifying the status
  cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

  //Retrieves multiple checkboxes in array and click on 2 out of the list
  cy.get('input[type="checkbox"]').check(['option2','option3'])

  //Static dropdown
  cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

  
  //Dynamic dropdown
  cy.get('#autocomplete').type('Ind')

  //Use array to store all the values received after entering few characters and theough If condition select the required value
  cy.get('.ui-menu-item div').each(($el,index,$list) => {
    if($el.text()==='India'){
      $el.click()
    }
  })
  cy.get('#autocomplete').should('have.value','India')


  //Check the element on UI is visible or not
  cy.get('#displayed-text').should('be.visible')
  cy.get('#hide-textbox').click()
  cy.get('#displayed-text').should('not.be.visible')
  cy.get('#show-textbox').click()
  cy.get('#displayed-text').should('be.visible')

  //Radio Button Selection
  cy.get('.left-align input[value="radio1"]').check().should('be.checked')
  cy.get('.left-align input[value="radio2"]').check().should('be.checked')

  cy.get('.left-align input[value="radio1"]').should('not.be.checked')


})
})
