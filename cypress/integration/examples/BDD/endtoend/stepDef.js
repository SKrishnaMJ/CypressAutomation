/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ShopPage from "../../../pageObjects/ShopPage";
import CheckoutPage from "../../../pageObjects/CheckoutPage";
import FinalPage from "../../../pageObjects/FinalPage";

const homePage = new HomePage()
const shopPage = new ShopPage()
const checkoutPage = new CheckoutPage()
const finalPage = new FinalPage()
let name

Given('An ecommerce website', () =>
{
    cy.visit(Cypress.env('url')+ "/angularpractice/")

})

When ('We add different items to the cart', function()
{
    homePage.getShopTab().click()
    this.data.productName.forEach(function(product)
        {
            cy.selectProduct(product)
        })
    shopPage.getCheckoutButton().click()
})

When ('We validate if the total prices match and click checkout', () =>
{
    checkoutPage.getTotPriceValidation()
    checkoutPage.getCheckoutButton().click()
})

Then ('We select a country and click submit and validate if Success', function()
{
    cy.selectCountry(this.data.countryName)
    finalPage.getClickCheckbox().click()
    finalPage.getPurchaseButton().click()
    finalPage.getSuccessMsg().should('contain', 'Success')
    finalPage.getCloseButton().click()
})

When ('I fill the form details', function (dataTable) 
{
    name = dataTable.rawTable[1][0]
    homePage.getNameBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then ('I validate a certain functionality', () =>
{
    homePage.getTwoWayDatBinding().should('have.value', name)
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepenuerRadioButton().should('be.disabled')
})

Then ('Now I open the shop page', () =>
{
    homePage.getShopTab().click()

})