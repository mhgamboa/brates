// Testing Ground for adding new sites
const puppeteer = require("puppeteer");
const parse = require("./parse");

module.exports = async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://rewards.investvoyager.com/interest/");

  let rate = await page.evaluate(() => {
    document.querySelectorAll("button").forEach(b => {
      console.log(b.textContent);
    });
    return rate;
  });
  await browser.close();

  rate = parse(rate);
  return rate;
};
