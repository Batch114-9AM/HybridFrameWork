import{test, expect} from '@playwright/test'
import {homapageclass} from '../MyAppPages/PageWebData/Homepage'
import {pimpageclass} from '../MyAppPages/PageWebData/Pimpage'
import {pimaddemployeeclass} from '../MyAppPages/PageWebData/AddEmppage'
import {reviewpageclass} from '../MyAppPages/PageWebData/Reviewpage'
import myexceldata from 'xlsx'

let hp : homapageclass
let pp : pimpageclass
let ap : pimaddemployeeclass
let rp : reviewpageclass

test.describe("Test Scenario on Adding One Employee", async()=>
{
    function readingExcel(fpath : string , sname : string)
    {
        const wb = myexceldata.readFile(fpath);
        const ws : any = wb.Sheets[sname];
        const edata : any =  myexceldata.utils.sheet_to_json(ws  ,{header : 1 })
        return edata;
    }
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
        await page.waitForTimeout(1000);
        hp.myPhoto('./MyTestEvidences/AfterLogin.jpg')
        const empinfo : any = readingExcel('./OrangeEmp/EmpData.xlsx', 'EmpAdd')
        await page.waitForTimeout(1000);
        for(let r : number = 1 ; r < empinfo.length; r++)
        {
        pp.mouseHoverPIM();
        await page.waitForTimeout(500);
        pp.clickAdd();
        await page.waitForTimeout(2000);
        ap.enterEmpID(empinfo[r][0].toString())
        await page.waitForTimeout(500);
        ap.enterFirstName(empinfo[r][1]);
        await page.waitForTimeout(500);
        ap.enterLastName(empinfo[r][2])
        await page.waitForTimeout(500);
        ap.enterMidName(empinfo[r][3])
        await page.waitForTimeout(500);
        ap.enterNickName(empinfo[r][4])
        await page.waitForTimeout(500);
        ap.uploadPhoto('./Empphotos/' +empinfo[r][1] +'.jpg')
        await page.waitForTimeout(500);
        hp.myPhoto('./MyTestEvidences/' +empinfo[r][1] +'_BeforeSave.jpg')
        ap.clickSaveFrame();
        await page.waitForTimeout(5000);
        hp.myPhoto('./MyTestEvidences/' +empinfo[r][1] +'_AfterSave.jpg')
        rp.clickBackFrame();
        await page.waitForTimeout(1000);
        console.log("The Employee with name as " +empinfo[r][1] +" , added successfully")
        hp.myPhoto('./MyTestEvidences/' +empinfo[r][1] +'_AfterAdd.jpg')
        } //ending for loop

        await page.waitForTimeout(3000);
        })
})