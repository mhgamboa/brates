const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://www.affirm.com/savings");
  // Affirm has no easy class/id to identify the APY. "#maincontent" seems the most stable
  let rate = await page.evaluate(() => {
    const main = document.querySelector("#maincontent");
    return main.children[2].children[0].children[1].children[1].children[1].textContent;
  });
  await browser.close();

  return rate;
};
