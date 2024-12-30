import {Given, When, Then} from "cypress-cucumber-preprocessor";

Given("precondition",()=>{
    cy.get("https://demo.guru99.com/test/newtours/")
    })

When("action",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')  
})

Then("testable outcome",()=>{
    cy.title().should('eq','Welcome: Mercury Tours')  
})