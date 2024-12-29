import Login from "../pages/Login.js";

let userData;

const login=new Login();

describe('Login Scenario', ()=>{
    
    before(()=>{
        cy.clearAllCookies();
        cy.fixture('userdata').then((data)=>{
            userData=data;
        })
       
    })
    it('TC_Login_Negetive', ()=>{
        
        cy.visit('https://automationexercise.com/')
        login.clickLoginSignup()
        login.typeEmail(userData.email)
        login.typePassword(`${userData.password} wrong`)
        //cy.pause()
        cy.get('[data-qa="login-button"]').screenshot("Manual- Login Button Screenshot")
        login.clickLoginButton()
        login.verifyLoginFaliedForInvalidCr()
        //login.verifyLoggedIn(userData.username)
        //login.ClickLogout()
        // For failed screenshots
        //cy.get('.login-form > form > p').should('have.text', 'Your emai or password is incorrect!');
        
        
    })

    it('TC_Login_Positive_using_CustomCommand', ()=>{ 
        cy.login(userData.email,userData.username, userData.password);
        cy.screenshot("Manual- Login Successful");
     })
})