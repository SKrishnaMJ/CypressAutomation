/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling mouse hover using Jquery show
        cy.get('.mouse-hover-content').invoke('show')
        cy.get('a[href="#top"]').click()
        cy.url().should('contain', 'top')

        //Handling hidden elements using the foce click method by cypress
        cy.get('a[href="#top"]').click({force:true})
        cy.url().should('contain', 'top')


       
      
      
        
        
    })

})