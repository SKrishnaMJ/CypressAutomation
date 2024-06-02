/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Handling checkboxes
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        //Handling mutliple checkboxes at a single time
        cy.get("input[type='checkbox']").check(['option1', 'option3']).should('be.checked')

        //Handling dropedowns (Static)
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')

        ////Handling dropedowns (Dynamic)
        cy.get('#autocomplete').type('ind')
        // .ui-menu-item div is a parent child traversal which is done by putting a space between elements
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text()==='India')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //Checking visibilty of an element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Handling radio buttons
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value', 'radio1')
        
        
        
    })

})