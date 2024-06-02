describe('My Intercept Mock Suite', function()
{
    it('My first api test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body:
            [
                {
                    "book_name": "Sai the GOAT",
                    "isbn": "BSG",
                    "aisle": "2302"
                },
            ]
        }).as('mockresponse')
        cy.get('.btn.btn-primary').click()
        cy.wait('@mockresponse').then(({request,response}) =>
        {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

    // it('My second api test', function()
    // {
    //     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    //     cy.get('.btn.btn-primary').click()
    //     cy.get('tr:nth-child(8) td').each(($el, index, list) => 
    //     {
    //         const bookName = $el.text()
    //         if (bookName.includes('Learn Appium Automation with Java'))
    //         {
    //             cy.get('tr:nth-child(8) td').eq(index). should('have.text', 'Learn Appium Automation with Java')
    //         }
    //     })



    // })
})