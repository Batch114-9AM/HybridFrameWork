import {Page} from '@playwright/test'
import rpage from '../PageJson/Reviewpage.json'   //all xpaths
import {WebPage} from '../../CommonUI/CommonUIData'  //class --> all functions


export class reviewpageclass
{
    page : Page
    web : WebPage
    constructor(page : Page)
    {
        this.page = page
        this.web = new WebPage(page)
    }

    async textReviewPage()
    {
        await this.web.getText(rpage.XREVTEXT)
    }

    async clickBackFrame()
    {
        await this.web.clickButtonFrame(rpage.XREVFRAME, rpage.XBACK)
    }

}