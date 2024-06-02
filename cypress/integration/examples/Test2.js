/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('.product-name').text()
            if (vegName.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.get('button').contains('Place Order').click()
        
    })

})