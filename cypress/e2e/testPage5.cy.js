/// <reference types="Cypress" />

describe('My Fifth Test', () => {

it('Reaching to specific cell in table using Each method', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //Using nth-child(2) to reach to specific element in table, here reaching to second TD 
  //Using each to iterate to retrieve text of that specific cell/TD
  cy.get('tr td:nth-child(2)').each(($e1,index,$list) => {
    const text = $e1.text()
    if(text.includes("Python")){
      //Next is used to reach next sibling, Next is jQuery method we have to resolve promise
      cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
        const priceText = price.text()
        expect(priceText).to.equal('25')
      })
    }

  })

})
})
