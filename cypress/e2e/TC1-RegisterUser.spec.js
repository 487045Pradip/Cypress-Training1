describe('Register User', ()=>{
    
    it('TC_RegisterUser', ()=>{
        cy.visit('https://automationexercise.com/login')
        const UserID=`cypress ${Math.random()} ${Date.now()}`
        cy.log (`User ID is : ${UserID}`)
        cy.get('[data-qa="signup-name"]').type(UserID)
        cy.get('[data-qa="signup-email"]').type(UserID+ '@cypress.com')
        cy.get('[data-qa="signup-button"]').click()
    })
})