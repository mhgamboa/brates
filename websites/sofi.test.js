const scrape = require("./_scrape.js");
// Scraping Functions
const scrapeSofi = require("./sofi.js");
const scrapeAffirm = require("./affirm.js");
const scrapeDiscover = require("./discover.js");

test('Scraping Affirm return "0.65"', async () => {
  const rate = await scrapeSofi();
  expect(rate).toBe(0.25);
});
