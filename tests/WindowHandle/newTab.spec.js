import {test,expect} from "@playwright/test"

test("New tab",async({browser})=>{
    let context =await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.getByRole('searchbox',{name:"Search Amazon.in"}).fill("Samrt watch");
    await page.keyboard.press("Enter");
    let url=await page.url();
    await page.waitForURL(url)
    console.log(await page.url());
    
    let [newTab]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//span[text()='boAt Wave Call 3 Smartwatch 1.83” HD Display with Animated Watch Faces; BT Calling, Functional Crown, Multiple Sports Modes, IP68, HR, SpO2 Monitor, Smart Watches for Men & Women (Timber Brown)']").click()

    ])

    console.log(await newTab.url());
    await newTab.getByRole("button", {name: "Add to cart"}).click()
    await page.waitForTimeout(2000)
    
})