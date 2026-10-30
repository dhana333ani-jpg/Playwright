import {test} from "@playwright/test";

test("search a product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines");
    await page.getByPlaceholder("Find medicine, health products, & more").fill("citrizine");
    await page.getByText("Citizine 500 Tablet - 10 Tablet").click();
})

test("add to card product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines");
    await page.getByPlaceholder("Find medicine, health products, & more").fill("citrizine");
    await page.getByText("Citizine 500 Tablet - 10 Tablet").click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", {name:"Add"}).nth(3).click();
    await page.waitForTimeout(2000);
})

test("Remove product", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines");
    await page.getByPlaceholder("Find medicine, health products, & more").fill("citrizine");
    await page.getByText("Citizine 500 Tablet - 10 Tablet").click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", {name:"Add"}).nth(3).click();
    await page.waitForTimeout(2000);
    await page.getByAltText("dropdown").click();
    await page.getByText("Remove").click();
    await page.waitForTimeout(2000);
})

test("Increase the count", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines");
    await page.getByPlaceholder("Find medicine, health products, & more").fill("citrizine");
    await page.getByText("Citizine 500 Tablet - 10 Tablet").click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", {name:"Add"}).nth(3).click();
    await page.waitForTimeout(2000);
    await page.getByAltText("dropdown").click();
    await page.getByRole("button", {name:"4"}).click();
    await page.waitForTimeout(2000);
})

test.only("Decrease the count", async({page})=>{
    await page.goto("https://www.medibuddy.in/order-medicines");
    await page.getByPlaceholder("Find medicine, health products, & more").fill("citrizine");
    await page.getByText("Citizine 500 Tablet - 10 Tablet").click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", {name:"Add"}).nth(3).click();
    await page.waitForTimeout(2000);
    await page.getByAltText("dropdown").click();
    await page.getByRole("button", {name:"4"}).click();
    await page.getByAltText("dropdown").click();
    await page.locator("//button[text()='1']").click();
    await page.waitForTimeout(2000);
})