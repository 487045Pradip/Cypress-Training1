import Signup from "../pages/Signup.js";
//import Signup from '../../pages/signup';
let userData;

const signup=new Signup();

describe('Register User', ()=>{
    
    before(()=>{
        cy.clearAllCookies();
        cy.fixture('userdata').then((data)=>{
            userData=data;
        })
       
    })
    it('TC_RegisterUser', ()=>{
        
        cy.visit('https://automationexercise.com/login')
        signup.TitleVisibility()
        signup.logoVisibility()
        const username=`cypress- ${Math.random()} ${Date.now()}`
        signup.typeRegisterUserName (username)
        signup.typeRegisterEmail(username+ '@cypress.com')
        signup.clickRegisterSignupButton()
        signup.verifyCreateAccountPage()

        // Data filling
        signup.selectGenderMale()
        signup.typePassword(userData.password)
        signup.selectDOB()
        signup.typeFirstName(userData.firstName)
        signup.typeLastName(userData.lastName)
        signup.typeCompany(userData.company)
        signup.typeAddress(userData.address)
        signup.typeCountry(userData.country)
        signup.typeStateCityZip(userData.state,userData.city,userData.zip)
        signup.typeMobile(userData.mobile)
  
        signup.clickCreateAccountButton()
        signup.verifyAccountCreation()
        signup.clickLogout()
        
       
        
    })
})