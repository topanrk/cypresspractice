describe('test', function (){
    // before(() =>{
    //     cy.visit('https://bukalapak.com')
    // })
    // beforeEach(() =>{
    //     cy.visit('https://bukalapak.com')
    // })


    it ('test', function (){
        cy.visit('https://bukalapak.com')
        cy.contains('Daftar').click()
        cy.go('back')
        cy.go('forward')
    })


})