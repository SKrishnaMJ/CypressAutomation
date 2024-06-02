//Mocha testing Framework
/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('My first test case', function()  
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)
        //should is an assertion class in this case we are checking if we get 4 products as output. Length checks the number of elements
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.product').should('have.length', 5)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('This is not Cypress function')
        })
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        //This is assert if the header is Greenkart using have.text
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand.greenLogo').then(function(logoName)
        {
            cy.log(logoName.text())
        })
        

    } )


} )