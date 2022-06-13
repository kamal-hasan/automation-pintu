const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const loginPage = require('../pageobjects/loginPage');
const registerPage = require('../pageobjects/registerPage');


Given(/^I am on the home page #register$/, () => {
    expect(loginPage.btnLogin).exist;
});

When(/^I tap on create account link #register$/, () => {
    loginPage.tapCreateAccountButton();
});

When(/^I input name with (.*) #register$/, (name) => {
    registerPage.inputName(name);
});

When(/^I input email with (.*) #register$/, (email) => {
    registerPage.inputEmail(email);
});

When(/^I input password with (.*) #register$/, (password) => {
    registerPage.inputPassword(password);
});

When(/^I input password confirmation with (.*) #register$/, (passwordconfirmation) => {
    registerPage.inputPasswordConfirmation(passwordconfirmation);
});

When(/^I tap register button #register$/, () => {
    registerPage.tapRegisterButton();
});

Then(/^I should see <result> wording #register$/, (result) => {
    expect(registerPage.checkResult(result)).exist;
});
