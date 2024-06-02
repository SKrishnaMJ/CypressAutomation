/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling popups-Cypress does it automatically
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //Validating the text in a pop up by using window:alert
        cy.on('window:alert', (str) =>
        {   //Mocha validation is in this below format
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

       //Validating the text in a confirm pop up by using window:confirm
       cy.on('window:confirm', (str) =>
       {   //Mocha validation is in this below format
           expect(str).to.equal('Hello , Are you sure you want to confirm?')
       })
        
        
    })

})