const {test, expect} = require('@playwright/test');

class JobListingPage {

constructor(page) 
{
    this.page = page;
    this.header_element = page.locator("//div[@class='header-wrapper']//h1");
    this.drop_zone = page.locator("//div[@class='dropzone']/input");
    this.confirm_dialog_box = page.locator("//button[@data-test-id='confirm-upload-resume']");
    this.file = "//div[@class='dropzone']//h3";
    this.file_name_element = page.locator("//div[@class='dropzone']//h3");
    this.search_field =  page.locator("//input[@id='main-search-box']");
    this.dropDown = "//div[@class='Select-menu']//span[text()='Test Automation']";
    this.dropDownElement = page.locator("//div[@class='Select-menu']//span[text()='Test Automation']");
    this.search_button = page.locator("//button[@class='go-button']");
    this.card = "//div[@class='position-full-card']//p[contains(@class,'position-id-text')]";
    this.card_element = page.locator("//div[@class='position-full-card']//p[contains(@class,'position-id-text')]");
    this.apply_btn_element = page.locator("//button[@data-test-id='apply-button']")

}

async getPageHeaderText()
{
    const headerText = await this.header_element.textContent();
    return headerText;

}

async uploadfile(filePath,fileName)
{
    await this.drop_zone.setInputFiles(filePath);
    await this.confirm_dialog_box.click();
    await this.page.waitForSelector(this.file, {timeout: 20000})
    await expect(this.file_name_element).toContainText(fileName);
}

async searchJob(searchText)
{
    await this.search_field.fill(searchText);
    await this.page.waitForSelector(this.dropDown, {timeout: 20000});
    await this.dropDownElement.click({ timeout: 5000 });
    await this.search_button.click();
    await this.page.waitForSelector(this.card, {timeout: 5000})
}

async verifyJobRequirementId(){

    const headerText = await this.card_element.textContent();
    return headerText;
}

async clickApplyButton(){
    await this.apply_btn_element.click({timeout: 5000});
}

}
module.exports  = {JobListingPage};