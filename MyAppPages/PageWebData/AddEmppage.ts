import {Page} from '@playwright/test'
import addpage from '../PageJson/AddEmppage.json'   //all xpaths
import {WebPage} from '../../CommonUI/CommonUIData'  //class --> all functions

export class pimaddemployeeclass
{
    page : Page
    web : WebPage
    constructor(page : Page) 
    {
        this.page = page
        this.web = new WebPage(page)
    }

    async checkADDEmpLogo()
    {
        await this.web.checkLocator(addpage.XADDEMPLOGO)
    }

    async enterEmpID(myeid : string)
    {
        await this.web.enterDataFrame(addpage.XADDEMPFRAME, addpage.XID, myeid)
        await this.page.waitForTimeout(500);
    }

    async enterFirstName(efirst : string)
    {
        await this.web.enterDataFrame(addpage.XADDEMPFRAME, addpage.XFIRST, efirst)
        await this.page.waitForTimeout(500);
    }

    async enterLastName(elast : string)
    {
        await this.web.enterDataFrame(addpage.XADDEMPFRAME, addpage.XLAST, elast)
        await this.page.waitForTimeout(500);
    }

    async enterMidName(emid : string)
    {
        await this.web.enterDataFrame(addpage.XADDEMPFRAME, addpage.XMID, emid)
        await this.page.waitForTimeout(500);
    }

    async enterNickName(enick : string)
    {
        await this.web.enterDataFrame(addpage.XADDEMPFRAME, addpage.XNICK, enick)
        await this.page.waitForTimeout(500);
    }

    async enterFullData(eid: string , efirst : string, elast: string , emid : string, enick : string)
    {
        await this.web.enterallDataFrame(addpage.XADDEMPFRAME, addpage.XID, addpage.XFIRST, addpage.XLAST, addpage.XMID, addpage.XNICK , eid, efirst , elast, emid, enick)
    }

    async uploadPhoto(mypath : string)
    {
        await this.web.uploadPhotoFrame(addpage.XADDEMPFRAME, addpage.XPHOTO, mypath)
        await this.page.waitForTimeout(500);
    }

    async clickSaveFrame()
    {
        await this.web.clickButtonFrame(addpage.XADDEMPFRAME, addpage.XSAVE);
        await this.page.waitForTimeout(500);
    }

    




}

