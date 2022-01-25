const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    rate: Number,
    type: String,
  },
  { timestamps: true }
);

module.exports.affirm = mongoose.model("Affirm", UserSchema);
module.exports.discover = mongoose.model("Discover", UserSchema);
module.exports.voyager = mongoose.model("Voyager", UserSchema);
// module.exports.sofi = mongoose.model("Sofi", UserSchema);
