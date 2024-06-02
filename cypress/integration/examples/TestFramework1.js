/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"

describe('My second test suite', function()
{
    before(() => {
        // root-level hook
        // runs once before all tests
        //everytime we use .fixture() method to read the .json file for our data we need to resolve the promise and then use the global "this" variable to store our data so that it can used everywhere
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })
    it('my first framework test case', function()
    {
        const homePage = new HomePage()
        
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        
        
        cy.get('h4 input[name="name"]').should('have.value', this.data.name)
        //one way to validate minlength attritube by using .invoke() and resolving the promise and then comparing
        cy.get('.form-group input[name="name"]').invoke('attr', 'minlength').then(function(resLen)
        {
            expect(resLen).to.equal('2')
        })
        //second way is using the inbuilt .should('have.attr','minlength','2') method
        cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2')
        //should('be.disabled') is used to check if that element is disabled
        cy.get('#inlineRadio3').should('be.disabled')
        // cy.contains("Shop").click()
        cy.get('a[href*="shop"]').click()
        //using the custom command i created and placed in command.js
        // cy.selectProduct(this.data.productName)
        // cy.selectCategory(this.data.categoryName)
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        })


    })

})