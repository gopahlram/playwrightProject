const {test, expect} = require('@playwright/test');
const {BasePage} = require('../pages/BasePage');
const {SwitchingWindow} = require('../pages/SwitchingWindow');


test('Career Profile Submit Flow', async({browser}) => 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.appliedmaterials.com/");

    const basePage = new BasePage(page);
    const switchingWindow = new SwitchingWindow(context,page);
    const homepage = basePage.getHomePage();
    await homepage.clickCareerSection();
    const [newPage] = await switchingWindow.switchTab();

    const basePageAfteSwitch = new BasePage(newPage);

    const joblistingpage = basePageAfteSwitch.getJobListingPage();
    expect( await joblistingpage.getPageHeaderText()).toContain("What Will You Make Possible?");
    await joblistingpage.uploadfile("./resources/sample_profile.pdf","sample_profile.pdf");
    await joblistingpage.searchJob("Test Automation");
    expect( await joblistingpage.verifyJobRequirementId()).toContain("ID: R2412287");
    await joblistingpage.clickApplyButton();

    const submitformpage = basePageAfteSwitch.getSubmitFormPage();
    submitformpage.click_submit_form();
    expect( await submitformpage.getToastErrorMessage()).toContain("Please fill all required fields (marked with *)")
    
});