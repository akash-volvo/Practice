const { $ } = require('@wdio/globals');
const Page = require('./page');

class RegisterPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button');
    }

    getSuccessMessage() {
        return $('#status').isDisplayed();
    }
    

    async register (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
