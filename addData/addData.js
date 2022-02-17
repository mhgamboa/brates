const parse = require("./parse");
const sites = require("./websites");

module.exports = async () => {
  try {
    for (const site in sites) {
      console.log(`Beginning ${site}`);
      const { scrape, Rate, type } = sites[site];

      let rate = await scrape();
      console.log(`${site} successfully Scraped`);

      rate = parse(rate.trim());
      if (rate !== "Error") {
        await Rate.create({ rate, type });
        console.log(`${site} successfully parsed and added to the DB`);
      }
    }
  } catch (err) {
    console.error("Could not add a new Item to the database");
  }
};
