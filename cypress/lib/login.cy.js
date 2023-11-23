class Login {

    inputUsername(value) {
        cy.get('input#user-name').type(value);
    }

    inputPassword(value) {
        cy.get('input#password').type(value);
    }

    clickButtonLogin() {
        cy.get('input#login-button').click();
    }

    loginStandardUser() {
        this.inputUsername('standard_user');
        this.inputPassword('secret_sauce');
        this.clickButtonLogin();
        cy.get('div.product_label').should('be.visible');
    }

}

export default Login;