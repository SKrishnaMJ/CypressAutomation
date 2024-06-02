describe('My Intercept Mock Suite', function()
{
    it('My first api test', async () =>
    {
        var actualprodName 
        var valPrice
        var totalPrice
        cy.loginAPI().then(function(token)
        {
            cy.visit('https://rahulshettyacademy.com/client', 
            {
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token', token)
                }
            })
        })
        cy.get('.card-body button:last-of-type').eq('2').click()
        cy.get('button[routerlink*="cart"]').click()
        cy.get('.cartSection h3').then(function(product)
        {
            actualprodName = product.text()

        })
        cy.get('.prodTotal p').then(function(price)
        {
            valPrice = price.text().split(" ")
            valPrice = valPrice[1].trim()
            cy.log(valPrice)
        })
        cy.get('.value').eq('1').then(function(totPrice)
        {
            totalPrice = totPrice.text().split("$")
            totalPrice = totalPrice[1].trim()
            cy.log(totalPrice)

        })
        if (valPrice === totalPrice)
        {
            cy.log("It is here")
            cy.get('.totalRow button').click()
        }
        cy.get('input[placeholder="Select Country"]').type('Ind')
        cy.get('.ta-results button').each(($el, index, $list) =>
        {
            if($el.text() === " India")
            {
                cy.wrap($el).click()
            }

        })
        cy.get('.action__submit').click({force:true})
        cy.wait(3000)
        cy.get('.order-summary button').each(($el, index, $list) => 
        {
            if ($el.text() === "Click To Download Order Details in Excel")
            {
                cy.wrap($el).click()
            }
        })
        cy.wait(3000)
        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_skrishna007.xlsx"
        cy.task('excelToJsonConvert', filePath).then(function(result)
        {
            console.log(result.data[0].A)
            expect(result.data[1].B).to.equal(actualprodName)
        })

        //Read file and convert it into text and validate if this text includes the product
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_skrishna007.xlsx").then(function(text)
        {
            expect(text).to.include(actualprodName)
        })

    


        
    })
})