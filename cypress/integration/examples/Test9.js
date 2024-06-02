/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='blog/']").eq(0).click()
        cy.iframe().find(".thrv_wrapper h3[css='1']").then(function(message)
        {
            message.text().should('contain', 'World Class Software')
        })

        

    })

})