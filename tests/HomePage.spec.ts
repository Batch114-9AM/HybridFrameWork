import{test, expect} from '@playwright/test'
import {homapageclass} from '../MyAppPages/PageWebData/Homepage'


let hp : homapageclass

test.describe("Test Scenario - Home Page Testing", async()=>
{
    test.beforeEach(async({page})=>
    {
        hp = new homapageclass(page);
    })

    test("Test Case1 - Launch the Orange HRM Home Page", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(3000);
    })

    test("Test Case2 - Check Company Logo and Emp Logo", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.ComLogo();
        hp.EmpLogo();
        console.log("We haave found those two logos")
        await page.waitForTimeout(2000);
    })

    test("Test Case3 - Check the Home age Text", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.GenericText();
        await page.waitForTimeout(2000);
    })

    test("Test Case4 - Enter My Username", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.enterUsername();
        await page.waitForTimeout(2000);
    })

    test("Test Case5 - Enter My Password", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.enterUsername();
        await page.waitForTimeout(500);
        hp.enterPassword();
        await page.waitForTimeout(2000);
    })

    test("Test Case6 - Click on Login Button", async({page})=>
    {
        await page.waitForTimeout(3000);
        hp.myApp();
        await page.waitForTimeout(2000);
        hp.enterUsername();
        await page.waitForTimeout(500);
        hp.enterPassword();
        await page.waitForTimeout(500);
        hp.clickLogin();
        await page.waitForTimeout(500);
        hp.myPhoto('./MyTestEvidences/AfterLogin.jpg')
        
        await page.waitForTimeout(2000);
    })
})
