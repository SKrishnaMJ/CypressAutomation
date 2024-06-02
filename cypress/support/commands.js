// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// -- This is a parent command to select a product and add that product to cart
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4[class="card-title"]').each(($el, index, list) =>
        {
            if($el.text().includes(productName))
            {
                cy.get('button[class="btn btn-info"]').eq(index).click()
            }
        })
})

// -- This is a parent command to select a category (1,2 or 3)
Cypress.Commands.add('selectCategory', (categoryName) => {
    cy.get('.list-group-item').each(($el, index, list) =>
        {
    if (($el.text()).includes(categoryName))
    {
        cy.wrap($el).click()
    }
})
})

// -- This is a parent command to select the typed deliery country name
Cypress.Commands.add('selectCountry', (country) => {

    cy.get('.validate').type(country)
    cy.wait(6000)
    cy.get('.suggestions > ul > li > a').click()
  

})

//--This is a parent command to extract session token after a loginAPI call
Cypress.Commands.add('loginAPI', () => {

    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',  
    {
        "userEmail": "skrishna007@gmail.com",
        "userPassword": "Edenhazard1!"
    }).then(function(res)
    {
        expect(res.status).to.equal(200)
        // Cypress.env("token", res.body.token)
        return res.body.token
    })
  

})


