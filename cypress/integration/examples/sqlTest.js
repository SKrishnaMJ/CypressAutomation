describe("My first SQL suite", () =>
{
    it("My first SQL test", () =>
    {
        cy.sqlServer("Select * from Persons").then(function(result)
        {
            console.log(result[0][1])
        })
    })
})