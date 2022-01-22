// Scraping Functions
const scrapeSofi = require("./sofi.js");
const scrapeAffirm = require("./affirm.js");
const scrapeDiscover = require("./discover.js");

module.exports = async () => {
  try {
    const rate = await scrapeDiscover();
    console.log(rate);
    // await scrapeDiscover();
    // await scrapeSofi();
    // await scrapeAffirm();
  } catch (error) {}
};
