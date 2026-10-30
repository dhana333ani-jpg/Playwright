import {expect, test} from "@playwright/test";

test("New Tab-Flipkart", async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[text()='✕']").click();
    await page.locator("//input[@class='nw1UBF v1zwn26']").first().fill("pendrive");
    await page.keyboard.press("Enter");
    let url=await page.url();
    await page.waitForURL(url);
    console.log(url);

    let [newtab]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByText("HP MM-USB064GB-36P 64 GB Pen Drive Compatible with Audi...").click()
    ])
    console.log(await newtab.url());
    await newtab.waitForLoadState("domcontentloaded");
    await newtab.getByText("Add to cart", { exact: true }).click();
// Assert that either "Go to cart" or the Login/OTP prompt appears successfully
    const expectedResponse = newtab.locator("text=/go to cart|login|enter mobile number/i").first();
    await expect(expectedResponse).toBeVisible({ timeout: 10000 });

});