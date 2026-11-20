import {Page} from '@playwright/test'
import ppage from '../PageJson/Pimpage.json'   //all xpaths
import {WebPage} from '../../CommonUI/CommonUIData'  //class --> all functions


export class pimpageclass
{
    page : Page
    web : WebPage
    constructor(page: Page)
    {
        this.page = page
        this.web = new WebPage(page)
    }

    async checkPIMLogo()
    {
        await this.web.checkLocator(ppage.XPIMLOGO)
    }

    async textINPIM()
    {
        await this.web.getText(ppage.XPIMTEXT)
    }

    async mouseHoverPIM()
    {
        await this.web.elementHover(ppage.XPIM)
    }

    async clickAdd()
    {
        await this.web.clickButton(ppage.XADD)
    }


}