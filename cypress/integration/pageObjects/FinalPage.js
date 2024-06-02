class FinalPage
{
    

    getClickCheckbox()
    {
        return cy.get('label[for="checkbox2"]')
    }

    getPurchaseButton()
    {
        return cy.get('.btn-success')
    }

    getSuccessMsg()
    {
        return cy.get('div .alert-success').then(function(message)
        {
            message.text()
        })
    }

    getCloseButton()
    {
        return cy.get('.close')
    }

}

export default FinalPage