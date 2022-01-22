const puppeteer = require("puppeteer");
const parse = require("./_parse.js");

module.exports = async () => {
  console.log("affirm");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.affirm.com/savings");

  let rate = await page.evaluate(() => {
    const main = document.querySelector("#maincontent");
    // Affirm has no easy class/id to identify the APY. "#maincontent" seems the most stable
    return main.children[2].children[0].children[1].children[1].children[1].textContent;
  });
  rate = parse(rate);
  await browser.close();

  return rate;
};
