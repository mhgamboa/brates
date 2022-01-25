require("dotenv").config();
const addData = require("./websites/addData.js");
const connectDB = require("./db/connect.js");

const main = async () => {
  const day = new Date().getDate();
  if (day !== 1) {
    console.log(`Today is day ${day}. Function will not run`);
    return;
  }

  console.log(`Today is day ${day}. Now starting main file`);
  try {
    await connectDB(process.env.MONGO_URI);
    await addData();
  } catch (err) {
    console.error(err);
  }
};

main();
