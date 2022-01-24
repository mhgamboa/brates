const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.discover.com/online-banking/savings-account/");

  let rate = await page.evaluate(() => document.querySelector(".apy").textContent);
  await browser.close();

  return rate;
};
