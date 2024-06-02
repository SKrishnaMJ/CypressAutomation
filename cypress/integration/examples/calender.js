/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe('Calendar Automation', function()
{
    it('selecting the date', function()
    {
        const month = "8"
        const year = "2028"
        const day = "8"
        const expectList = [month, day, year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('a[href*="offers"]').invoke('removeAttr', 'target').click()
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.contains("button", year).click()
        // cy.get('.react-calendar__decade-view__years button').eq(7).click()
        // cy.get(".react-calendar__year-view__months__month abbr[aria-label='August 2028']").click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        // cy.get('.react-calendar__month-view__days__day abbr[aria-label="August 8, 2028"]').click()
        cy.contains(".react-calendar__month-view__days__day", Number(day)).click()
        // cy.get('.date-field-container').then(function(resDate)
        // {
        //     cy.log(resDate.text())
        //     // expect(resDate.text()).to.contain('08/08/2028')
        // })
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => 
        {
            cy.wrap($el).invoke('val').should('eq', expectList[index])

        })

        

    })

})