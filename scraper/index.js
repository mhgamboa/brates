import dotenv from "dotenv";
dotenv.config();

// Scraping Functions
import scrapeSofi from "./websites/sofi.js";
import scrapeAffirm from "./websites/affirm.js";

const main = async () => {
  try {
    // scrapeSofi();
    scrapeAffirm();
  } catch (err) {
    console.error(err);
  }
};

main();
