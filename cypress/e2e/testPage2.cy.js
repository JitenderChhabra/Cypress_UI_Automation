///<reference types="Cypress" />

describe('My Second Test', () => {

it('Continue to Next Page for Submit Order', () => {
  cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  cy.get('.search-keyword').type('ca')

  // Wait requires when there is no animation on page. Otherwise cypress wait by itself until animation finishes.
  cy.wait(1000)

  //Aliasing (as) to reuse locator on multiple places.
  cy.get('.products').as('productLocator')

  //Assert page heading logoText
  cy.get('.brand.greenlogo').should('have.text', 'GREENKART')

  //Find products, store in array, retrieves text of each element, search for a particular text and then click
  cy.get('@productLocator').find('.product').each(($el,index,$list) => {
    const vegText = $el.find('h4.product-name').text()
    if (vegText.includes('Cashews')){
      $el.find('button').click()
    }
  })

  cy.get('.cart-icon > img').click()
  cy.contains('PROCEED TO CHECKOUT').click()
  cy.get(':nth-child(5) > .amount').should('have.text', '650')
  cy.contains('Place Order').click()

})
})
