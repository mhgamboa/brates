import express from "express";
import dotenv from "dotenv";
import puppeteer from "puppeteer";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const getHTML = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // const rate = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll(".IllustrationWithText-title--2MG_X")).map(
  //     item => item.textContent
  //   );
  // });

  const rate = await page.$$eval("div", arr => {
    console.log(arr);
  });
  // console.log(rate);

  await browser.close();
};

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

const main = async () => {
  try {
    await getHTML("https://www.affirm.com/savings");
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

main();
