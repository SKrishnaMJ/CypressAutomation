/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("#opentab").then(function(el)
        {
            //Get the value of the attritube href using the .prop() Jquery method, in this case the url link and use this to open in the same tab
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () =>
            {
                cy.get('ul.ml-auto a[href*="about"]').click()
                cy.get('.page-banner-cont h2').should('contain', 'About')
            })
        })

    })

})