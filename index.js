require("dotenv").config();
const scrape = require("./websites/_scrape.js");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.get("/", (req, res) => {
  res.send(`Listeing on port ${port}`);
});

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
    await scrape();
  } catch (err) {
    console.error(err);
  }
};

main();
