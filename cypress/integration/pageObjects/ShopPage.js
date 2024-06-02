class ShopPage
{
    getCheckoutButton()
    {
        return cy.get('a[class="nav-link btn btn-primary"]')
    }

    getHomePageButton()
    {
        return cy.get('a[href="/angularpractice"]')
    }

}

export default ShopPage