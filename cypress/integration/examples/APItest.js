describe('API Test Suite', function() 
{
    it('API Post', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', 
        {
            "name":"Learn Appium Automation with Java",
            "isbn":"sakrishnaisgoat",
            "aisle":"66677",
            "author":"John foe"

        }).then(function(resp)
        {
            expect(resp.body).to.have.property('Msg', 'Book Already Exists')
        })
    })
})