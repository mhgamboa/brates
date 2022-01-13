const scrapeAffirm = require("./scrape/affirm.js");
const scrapeSofi = require("./scrape/sofi.js");

const helloWorld = async () => {
  console.log("hello world");
  await scrapeAffirm();
  await scrapeSofi();
};

helloWorld();
