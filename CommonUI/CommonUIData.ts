import{expect , Page, Locator} from '@playwright/test'


export class WebPage 
{
    page : Page

    constructor(page : Page)
    {
        this.page = page
    }
    
    element(myloc : string) : Locator
    {
        return this.page.locator(myloc)
    }

    async launhMyApp(url : string, myTitle : string)
    {
        await this.page.goto(url)
        expect(this.page).toHaveTitle(myTitle)
    }

    async enterData(loc : string, text : string)
    {
        await this.element(loc).fill(text)
    }

    async clickButton(loc : string)
    {
        await this.element(loc).click();
    }

    async getText(loc : string)
    {
        console.log(await this.element(loc).textContent())

    }

    async checkLocator(loc : string)
    {
        await expect(this.element(loc)).toBeVisible();
    }

    async elementHover(loc : string)
    {
        await this.element(loc).hover();
    }

    async enterDataFrame(floc : string , myloc : string, text : string)
    {
        await this.page.frameLocator(floc).locator(myloc).fill(text);
    }

    async uploadPhotoFrame(floc : string, myloc :string , filepath : string)
    {
        await this.page.frameLocator(floc).locator(myloc).setInputFiles(filepath)
    }

    async clickButtonFrame(floc : string , myloc : string)
    {
         await this.page.frameLocator(floc).locator(myloc).click();
    }

    async myScreenshot(mylocation : string)
    {
        await this.page.screenshot({path : mylocation})
    }


    async enterallDataFrame(floc : string , locid : string, locfirst : string,  loclast : string, locmid : string, locnkick : string, eid : string, efirst : string, elast : string , emid : string, enick : string)
    {
        await this.page.frameLocator(floc).locator(locid).fill(eid);
        await this.page.frameLocator(floc).locator(locfirst).fill(efirst);
        await this.page.frameLocator(floc).locator(loclast).fill(elast);
        await this.page.frameLocator(floc).locator(locmid).fill(emid);
        await this.page.frameLocator(floc).locator(locnkick).fill(enick);
    }

}




