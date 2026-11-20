import{test, expect} from '@playwright/test'
import {homapageclass} from '../MyAppPages/PageWebData/Homepage'
import {pimpageclass} from '../MyAppPages/PageWebData/Pimpage'
import {pimaddemployeeclass} from '../MyAppPages/PageWebData/AddEmppage'
import {reviewpageclass} from '../MyAppPages/PageWebData/Reviewpage'

let hp : homapageclass
let pp : pimpageclass
let ap : pimaddemployeeclass
let rp : reviewpageclass

test.describe("Test Scenario on Adding One Employee", async()=>
{
    test.beforeEach(async({page})=>
    {
        hp = new homapageclass(page)
        pp = new pimpageclass(page)
        ap = new pimaddemployeeclass(page)
        rp = new reviewpageclass(page)
    })

    test("Test Case on Adding one Employee", async({page})=>
    {
        test.setTimeout(1000000)
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.enterUsername();
        await page.waitForTimeout(500);
        hp.enterPassword();
        await page.waitForTimeout(500);
        hp.clickLogin();
        await page.waitForTimeout(2000);
        pp.mouseHoverPIM();
        await page.waitForTimeout(500);
        pp.clickAdd();
        await page.waitForTimeout(2000);
        ap.enterEmpID("9412")
        await page.waitForTimeout(500);
        ap.enterFirstName("MarieGold");
        await page.waitForTimeout(500);
        ap.enterLastName("GoodDay")
        await page.waitForTimeout(500);
        ap.enterMidName("Darkfantacy")
        await page.waitForTimeout(500);
        ap.enterNickName("Milkmaid")
        await page.waitForTimeout(500);
        ap.uploadPhoto('./Empphotos/AfterLogin.jpg')
        await page.waitForTimeout(500);
        ap.clickSaveFrame();
        await page.waitForTimeout(5000);
        rp.clickBackFrame();






         await page.waitForTimeout(3000);
        })
})