class HomePage
{
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getNameBox()
    {
        return cy.get('.form-group input[name="name"]')
    }

    getTwoWayDatBinding()
    {
        return cy.get('h4 input[name="name"]')
    }

    getEntrepenuerRadioButton()
    {
        return cy.get('#inlineRadio3')

    }

    getShopTab()
    {
        return cy.get('a[href*="shop"]')
    }

}

export default HomePage