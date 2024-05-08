const {HomePage} = require('./HomePage');
const {JobListingPage} = require('./JobListingPage');
const {SubmitForm} = require('./SubmitForm');

class BasePage
{
    constructor(page)
    {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.jobListingPage = new JobListingPage(this.page);
        this.submitFormPage = new SubmitForm(this.page);
    }

    getHomePage()
    {
        return this.homePage;
    }

    getJobListingPage()
    {
        return this.jobListingPage;
    }

    getSubmitFormPage()
    {
        return this.submitFormPage;
    }
}
module.exports  = {BasePage};