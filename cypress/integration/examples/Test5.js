/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling child windows using .invoke() JQuery method
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //Handing control to different domain as cypress does not support cross domain
        cy.origin('https://www.qaclickacademy.com/', () =>
        {
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
      
        
        
    })

})