const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://www.ally.com/bank/online-savings-account");

  let rate = await page.evaluate(
    () => document.querySelector(".allysf-rates-v1-rate").textContent
  );
  await browser.close();

  return rate;
};
