describe("Excel Download/Upload", function()
{
    it('Upload Download Test', function()
    {
        const replacePrice = '900'
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get('#downloadButton').click()
        cy.wait(3000)
        const FilePath = Cypress.config('fileServerFolder')+ '/cypress/downloads/download.xlsx'
        cy.task('excelManipulate', {searchWord: "Papaya", replaceWord: replacePrice, change: {rowChange:0, colChange:2}, filePath:FilePath})
        cy.get('#fileinput').selectFile(FilePath)
        cy.contains("Papaya").parent().parent().find('#cell-4-undefined').should('have.text', replacePrice)
    })
})