describe('Test Case Product Store',function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })
    it('register',function(){
        cy.get('#signin2').click()
        cy.get('#sign-username').type('dadada').should('have.value','dadada')
        cy.get('#sign-password').type('dididi').should('have.value','dididi')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
})