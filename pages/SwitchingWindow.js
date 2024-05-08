class SwitchingWindow {

constructor(context,page) 
{
    this.context = context;
    this.page = page;
    this.search_element = page.locator("//a[contains(@aria-label,'Search')]");
    
}

async switchTab()
{
    const [newPage] = await Promise.all(
        [
            this.context.waitForEvent('page'),
            await this.search_element.click(),
        ])
    return [newPage];
}
}
module.exports  = {SwitchingWindow};