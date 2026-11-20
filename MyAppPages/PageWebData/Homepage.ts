import {Page} from '@playwright/test'
import hpage from '../PageJson/Homepage.json'   //all xpaths
import {WebPage} from '../../CommonUI/CommonUIData'  //class --> all functions
import appdata from '../../UserInfo/Appinfo.json'  //app --> url , title, un, pwd

export class homapageclass
{
    page : Page;
    web : WebPage;
    constructor(page : Page)
    {
        this.page = page;
        this.web = new WebPage(page)   //creating object reference to handle all functions from WebPage class
    }
    
    async myApp()
    {
        await this.web.launhMyApp(appdata.url, appdata.title)
    }

    async ComLogo()
    {
        await this.web.checkLocator(hpage.XHOMELOGO)
    }

    async EmpLogo()
    {
        await this.web.checkLocator(hpage.XEMPLOGO)
    }

    async GenericText()
    {
        await this.web.getText(hpage.XHOMETEXT)
    }

    async enterUsername()
    {
        await this.web.enterData(hpage.XUN, appdata.un)
    }

    async enterPassword()
    {
        await this.web.enterData(hpage.XPWD, appdata.pwd)
    }

    async clickLogin()
    {
        await this.web.clickButton(hpage.XSUB)
    }

    async myPhoto(mypath : string)
    {
        await this.web.myScreenshot(mypath)
    }


}


