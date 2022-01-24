require("dotenv").config();
const addData = require("./websites/addData.js");
const express = require("express");

const connectDB = require("./db/connect.js");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`Listeing on port ${port}...`);
});

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}...`));

    await addData();
  } catch (err) {
    console.error(err);
  }
};

main();
