const parse = require("./parse");
const sites = require("./sites");

module.exports = async () => {
  try {
    for (const site in sites) {
      console.log(`Beginning ${site}`);
      const { scrape, Rate } = sites[site];

      let rate = await scrape();
      console.log(`${site} successfully Scraped`);

      rate = parse(rate);
      if (rate !== "Error") {
        console.log(`${site} successfully Parsed`);

        await Rate.create({ rate });
        console.log(`${site} successfully Added to the DB`);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
