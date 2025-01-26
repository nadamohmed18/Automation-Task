export class LoginPage {
    visit() {
      cy.visit('https://automationexercise.com/login'); 
    }
  
    fillLoginDetails(email, password) {
      cy.get('input[data-qa="login-email"]').type(email);
      cy.get('input[name="password"]').type(password);
    }
  
    submitLogin() {
      cy.get('button[data-qa="login-button"]').click();
    }
  }