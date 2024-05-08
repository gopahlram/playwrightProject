const { When, Then, Given } = require('@cucumber/cucumber')
const {BasePage} = require('../../pages/BasePage');
const {SwitchingWindow} = require('../../pages/SwitchingWindow');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');


Given('A user click search jobs in Career section.', {timeout: 200 * 1000}, async function () {
    this.basePage = new BasePage(this.page);
    
    const homepage = this.basePage.getHomePage();
    await homepage.clickCareerSection();
  });

Given('Navigate to job listing page.', {timeout: 300 * 1000}, async function () {

    const switchingWindow = new SwitchingWindow(this.context,this.page);
    [this.newPage] = await switchingWindow.switchTab();

    this.basePageAfteSwitch = new BasePage(this.newPage);
    this.joblistingpage = this.basePageAfteSwitch.getJobListingPage();

    expect(await this.joblistingpage.getPageHeaderText()).toContain("What Will You Make Possible?");
    
});

When('Upload user profile {string} in job listing page.', {timeout: 300 * 1000}, async function (file_name) {

    await this.joblistingpage.uploadfile("./resources/sample_profile.pdf",file_name);
    
});

When('Search for the {string} Job and check requirement id {string}.', {timeout: 300 * 1000}, async function (search_text, requirement_id) {

    await this.joblistingpage.searchJob(search_text);
    expect( await this.joblistingpage.verifyJobRequirementId()).toContain(requirement_id);
   
  });

When('Apply for the Selected Job.', async function () {

    await this.joblistingpage.clickApplyButton();

});

Then('Submit the application without mandatory fields and check error message {string}.', {timeout: 300 * 1000}, async function (toast_message) {

    const submitformpage = this.basePageAfteSwitch.getSubmitFormPage();
    submitformpage.click_submit_form();
    expect( await submitformpage.getToastErrorMessage()).toContain(toast_message)

  });
  