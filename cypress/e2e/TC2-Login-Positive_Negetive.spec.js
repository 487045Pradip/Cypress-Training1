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
        login.clickLoginButton()
        login.verifyLoginFaliedForInvalidCr()
        //login.verifyLoggedIn(userData.username)
        //login.ClickLogout()
        
    })

    it('TC_Login_Positive_using_CustomCommand', ()=>{ 
        cy.login(userData.email,userData.username, userData.password);
    })
})