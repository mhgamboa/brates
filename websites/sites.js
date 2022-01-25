module.exports = {
  Affirm: {
    scrape: require("./scrape/affirm.js"),
    Rate: require("../model/rate").affirm,
  },
  Discover: {
    scrape: require("./scrape/discover.js"),
    Rate: require("../model/rate").discover,
  },
  // Sofi: {
  //   scrape: ...,
  //   Rate: ...,
  // }
};
