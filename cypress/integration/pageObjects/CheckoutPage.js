class CheckoutPage
{
    
    getCheckoutButton()
    {
        return cy.get('.btn-success')
    }

    getHomePageButton()
    {
        return cy.get('a[href="/angularpractice"]')
    }

    getContinueShopButton()
    {
        return cy.get('button[class="btn btn-default"]')
    }

    getShopPage()
    {
        return cy.get('a[href*="shop"]')
    }

    getTotPriceValidation()
    {
        var totExpPrice = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, list) =>
        {
            var valPrice = $el.text().split(" ")
            valPrice = valPrice[1].trim()
            totExpPrice += Number(valPrice)

        }).then(function(){})

        cy.get('tr td:nth-child(4)').each(($el, index, list) =>
        {
            const cost = $el.text()
            if(cost.includes('Total'))
            {
                cy.get('tr td:nth-child(4)').eq(index).next().then(function(totPrice)
                {
                    var resSum = totPrice.text().split(" ")
                    resSum = resSum[1].trim()
                    return expect(totExpPrice).to.equal(Number(resSum))
                })
            }
        })
    }


}

export default CheckoutPage