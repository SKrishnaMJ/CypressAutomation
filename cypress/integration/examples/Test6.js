/// <reference types="Cypress" />
describe('My first test suite', function()
{
    it('my second test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling tables
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => 
        {
            const textName = $el.text()
            if(textName.includes('Python'))
            {
                //Getting the sibling using the .next() method which can only be used on .get()
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    //Mocha validation is in this below format
                    expect(price.text()).to.equal('25')

                })
            }

        })
      
      
        
        
    })

})