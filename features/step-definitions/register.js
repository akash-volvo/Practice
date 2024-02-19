const { Given, When, Then } = require('@cucumber/cucumber');
const RegisterPage = require('../pageobjects/register');

Given(/^I am on the registration page$/, async () => {
    await RegisterPage.open();
});

When(/^I register with (\w+) and (.+)$/, async (username, password) => {
    await RegisterPage.register(username, password);
});

Given(/^I should see a registration success message$/, async () => {
    const isMessageVisible = await RegisterPage.getSuccessMessage();
    await expect(isMessageVisible).toBe(true);
});
