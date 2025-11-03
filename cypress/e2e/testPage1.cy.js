///<reference types="Cypress" />

describe('My First Test', () => {

it('Visit a site', () => {
  cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  cy.get('.search-keyword').type('ca')

  // Wait requires when there is no animation on page. Otherwise cypress wait by itself until animation finishes.
  cy.wait(2000)

  // Visible keyword only find the elements which are visible on screen.
  cy.get('.product:visible').should('have.length', 4)

  //Aliasing (as) to reuse locator on multiple places.
  cy.get('.products').as('productLocator')

  //Another way to reach to child elements using find keyword.
  cy.get('@productLocator').find('.product').should('have.length', 4)

  //EQ is used to reach to the particular element by using index number.
  // Console.log is pure javascript printing option. Its not a cypress command. 'cy.log' is a cypress command.
  //Console.log prints in console and cy.log prints in test runner information.
  cy.get('@productLocator').find('.product').eq('2').contains('ADD TO CART').click().then(function(){
  console.log('Testing print command')
  })

  //Find products, store in array, retrieves text of each element, search for a particular text and then click
  cy.get('@productLocator').find('.product').each(($el,index,$list) => {
    const vegText = $el.find('h4.product-name').text()
    if (vegText.includes('Cashews')){
      $el.find('button').click()
    }
  })

  //Concept of then, Cypress is asynchronus, text is not cypress command, to resolve promise issue we need to use then command 
  // Promise are of 3 types, Resolve, Rejected, Pending
  // Cypress itself takes care of promise for all the cypress commands. Any command which is not from cypress like text we need to resolve the promise by ourself.
  cy.get('.brand.greenlogo').then((logoElementText) => {
    cy.log(logoElementText.text())
  })

  //Assert page heading logoText
  cy.get('.brand.greenlogo').should('have.text', 'GREENKART')

})

})
