const { Given, When, Then } = require('cucumber');
const { expect } = require("chai");
const loginPage = require('../pageobjects/loginPage');

Given(/^I am on the home page #login$/, () => {
    expect(loginPage.btnLogin).exist;
});

When(/^I input email with (.*) #login$/, (email) => {
    loginPage.inputEmail(email);
});

When(/^I tap password field with (.*) #login$/, (password) => {
    loginPage.inputPassword(password);
});

When(/^I tap login button #login$/, () => {
    loginPage.tapLoginButton();
});

Then(/^I should see (.*) wording #login$/, (result) => {
    expect(loginPage.checkResult(result)).exist;
});
