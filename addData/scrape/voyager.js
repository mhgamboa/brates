const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://rewards.investvoyager.com/interest/");

  let rate = await page.evaluate(() => {
    const table = document.querySelector("tbody").children;
    let rate;

    for (let row of table) {
      let coin = row.children[0].textContent;
      rate = row.children[1].textContent;
      if (coin === "USDC") break;
    }
    return rate;
  });
  await browser.close();

  return rate;
};
