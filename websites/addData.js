const parse = require("./parse");

const sites = {
  Affirm: {
    scrape: require("./scrape/affirm.js"),
    Rate: require("../model/rate").affirm,
  },
  Discover: {
    scrape: require("./scrape/discover.js"),
    Rate: require("../model/rate").discover,
  },
};

module.exports = async () => {
  try {
    for (const prop in sites) {
      console.log(`Beginning ${prop}`);
      const { scrape, Rate } = sites[prop];

      let rate = await scrape();
      console.log(`${prop} succuessfully Scraped`);

      rate = parse(rate);
      if (rate !== "Error") {
        console.log(`${prop} succuessfully Parsed`);

        await Rate.create({ rate });
        console.log(`${prop} succuessfully Added to the DB`);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
