class HomePage {

constructor(page) 
{
    this.page = page;
    this.career_element = page.locator("//div[contains(@class,'hover') and contains(@class,'cmp-tabs__list')]//a[contains(@class,'cmp-tabs__link')]");
    
}

async clickCareerSection()
{
    await this.career_element.click();
}
}
module.exports  = {HomePage};