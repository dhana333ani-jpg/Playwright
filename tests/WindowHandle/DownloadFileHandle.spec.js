import {test} from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

test("Download file", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.locator("#writeArea").fill("I love India");
    let [downloadFile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    console.log(await downloadFile.path());
    let downloadFolder="C:/Users/Dell/Desktop/Playwright/Screenshot";
    let fileName=await downloadFile.suggestedFilename();
    await downloadFile.saveAs(await path.join(downloadFolder,fileName));
    console.log(await downloadFile.path());
})