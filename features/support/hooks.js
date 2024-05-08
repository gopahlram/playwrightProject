
const { Before, AfterStep, Status } = require('@cucumber/cucumber')
const { BasePage } = require('../../pages/BasePage');
const playwright = require('@playwright/test');


Before(async function () {

    this.browser = await playwright.chromium.launch({
        headless: false
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto("https://www.appliedmaterials.com/");

});

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' })
    }

});