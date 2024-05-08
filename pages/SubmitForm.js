class SubmitForm {

    constructor(page) 
    {
        this.page = page;
        this.submit_btn_text = "//button[text()='Submit']";
        this.submit_buttom = page.locator("//button[text()='Submit']");
        this.toast_element = page.locator("//p[@class='toast-message']");
        
    }
    
    async click_submit_form()
    {
        await this.page.waitForSelector(this.submit_btn_text), {timeout: 5000};
        await this.submit_buttom.click({ timeout: 5000 });
        
    }

    async getToastErrorMessage()
    {
        const errorMessage = await this.toast_element.textContent();
        return errorMessage;

    }

    }
    module.exports  = {SubmitForm};