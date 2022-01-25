module.exports = {
  Affirm: {
    scrape: require("./scrape/affirm.js"),
    Rate: require("../model/rate").affirm,
    type: "Fiat",
  },
  Discover: {
    scrape: require("./scrape/discover.js"),
    Rate: require("../model/rate").discover,
    type: "Fiat",
  },
  Voyager: {
    scrape: require("./scrape/voyager.js"),
    Rate: require("../model/rate").voyager,
    type: "Stablecoin",
  },
  // Sofi: {
  //   scrape: ...,
  //   Rate: ...,
  // }
};
