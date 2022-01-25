const newSite = require("./newSite");

test("Should 32", () => {
  const result = newSite();
  expect(result).toBe(32);
});
