import puppeteer from 'puppeteer'

const testLink = "https://docs.google.com/forms/d/e/1FAIpQLScUJxjXiUp-dy8IE81vGzdx8L114tz9hEMsrHb87vRrFYeO9g/viewform?usp=sf_link";

async function DeleteFirstPage(browser) {
    const pages = await browser.pages()
    const page = pages.shift()

    if (page != null) await page.close()
}

async function generateUniqueIntegers(x, count) {
    if (count > x + 1) {
        console.error("Cannot generate more unique integers than the range allows.");
        return;
    }

    const result = [];

    while (result.length < count) {
        const randomInt = Math.floor(Math.random() * (x + 1));

        if (!result.includes(randomInt)) {
            result.push(randomInt);
        }
    }

    return result;
}

async function start() {
    process.argv.forEach(function (val, index, array) {
        if (val.includes("docs.google.com")) {
            spam(val);
        }
    });
}

async function spam(link) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--lang=en-GB,en']
    });

    const page = await browser.newPage();
    page.setExtraHTTPHeaders({
        "Accept-Language": "en",
    });

    DeleteFirstPage(browser);

    await page.goto(link);

    for (let i = 0; i < 5; i++) {
        await page.waitForSelector("div.Qr7Oae")
        const elems = await page.$$("div.Qr7Oae");

        // 
        await Promise.all(elems.map(async (val) => {
            let selectors = null;
            let amountToClick = 1;
            if (await val.$("div.eBFwI")) {
                selectors = await val.$$("div.eBFwI");
                amountToClick = Math.floor(Math.random() * selectors.length) + 1;
            } else {
                selectors = await val.$$("div.nWQGrd.zwllIb");
            }

            let nums = await generateUniqueIntegers(selectors.length - 1, amountToClick);

            for (let i = 0; i < nums.length; i++) {
                await selectors[nums[i]].click();
            }
        }));

        const send = await page.$$("span.l4V7wb.Fxmcue");
        send[send.length - 2].click()

        await page.waitForSelector("div.c2gzEf > a");
        const restart = await page.$("div.c2gzEf > a");
        restart.click();
    }

    page.close();
}

start();
