describe('Latihan Soal', function() {
    it('tc-01', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('#et_pb_contact_name_0').type('Topan')
        cy.get('#et_pb_contact_email_0').type('emailtesting@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    }),

    it('tc-02',function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('[value="male"]').check()
    }),

    it('tc-03',function (){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('[value="Bike"]').check()
    }),

    it('tc-04',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('select').select('Audi')
    }),

    it('tc-05',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.contains('Button success')
    })
    

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})