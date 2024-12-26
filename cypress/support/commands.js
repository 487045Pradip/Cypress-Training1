import Login from "../pages/Login.js";
const login=new Login();
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByDataCy', (value) => {
    return cy.get(`[data-qa="${value}"]`);
  })

  Cypress.Commands.add('login', (email,username,password) => {
    cy.session([email,username,password], () => {
    cy.visit('https://automationexercise.com/') 
    login.clickLoginSignup()
    login.typeEmail(email)
    login.typePassword(password) 
    login.clickLoginButton()
    login.verifyLoggedIn(username)
    login.ClickLogout()
    
  })
})