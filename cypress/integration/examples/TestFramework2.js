/// <reference types="Cypress" />

import CheckoutPage from "../pageObjects/CheckoutPage"
import FinalPage from "../pageObjects/FinalPage"
import HomePage from "../pageObjects/HomePage"
import ShopPage from "../pageObjects/ShopPage"

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
        const shopPage = new ShopPage()
        const checkoutPage = new CheckoutPage()
        const finalPage = new FinalPage()
        
        

        cy.visit(Cypress.env('url')+ "/angularpractice/")
        homePage.getNameBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDatBinding().should('have.value', this.data.name)
        homePage.getNameBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepenuerRadioButton().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(function(product)
        {
            cy.selectProduct(product)
        })
        shopPage.getCheckoutButton().click()
        checkoutPage.getTotPriceValidation()
        checkoutPage.getCheckoutButton().click()
        cy.selectCountry(this.data.countryName)
        finalPage.getClickCheckbox().click()
        finalPage.getPurchaseButton().click()
        finalPage.getSuccessMsg().should('contain', 'Success')
        finalPage.getCloseButton().click()

        
        
    })

})