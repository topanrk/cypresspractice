describe('kumpulan test case', function() {
    it('belajar contains', function() {
        cy.visit('https://bukalapak.com')
        cy.contains('Daftar').click()
        cy.get('.mv-48').should('exist')
        cy.get('.bl-text-field__input').type('topan').should('have.value','topan')
    }),

    it('',function() {
        // cy.visit('https://bukalapak.com')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})