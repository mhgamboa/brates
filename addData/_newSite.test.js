const newSite = require("./_newSite.js");

test("Scrape should be 9", async () => {
  const result = await newSite();
  expect(result).toBe(9);
});
