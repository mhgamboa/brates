import puppeteer from "puppeteer";
import parse from "./parse.js";

export default async () => {
  console.log("https://www.affirm.com/savings");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.affirm.com/savings");

  const rate = await page.evaluate(() => {
    const main = document.querySelector("#maincontent");

    // Affirm has no easy class/id to identify the APY.
    // Hence "#maincontent" seems the most stable
    return main.children[2].children[0].children[1].children[1].children[1].textContent;
  });
  await browser.close();
  console.log(parse(rate));
};
