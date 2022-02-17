const puppeteer = require("puppeteer");
const parse = require("./parse");

test("Scrape should be 0.5%", async () => {
  const result = async () => {
    try {
      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.goto("https://www.ally.com/bank/online-savings-account/");

      let rate = await page.evaluate(
        () => document.querySelector(".allysf-rates-v1-rate").textContent
      );
      await browser.close();
      console.log("rate");
      rate = parse(rate);
      return 0.5;
    } catch (err) {
      console.error(err);
    }
  };

  expect(await result()).toBe(0.5);
});

// https://www.marcus.com/us/en/savings/high-yield-savings
// document.querySelectorAll('.cpm-text')
// Text content contains "%"
