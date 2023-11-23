import Login from '../../lib/login.cy';

describe('User do login', () => {

    const loginObject = new Login;

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
    });

    context('Given I am on the login page', () => {
        context('When I am login with credential valid', () => {
            it('Then I will be redirected to dashboard page', () => {  
                loginObject.loginStandardUser();
            });
        });
    });

});