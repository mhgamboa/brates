const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({ rate: Number }, { timestamps: true });

module.exports.affirm = mongoose.model("Affirm", UserSchema);
module.exports.discover = mongoose.model("Discover", UserSchema);
// module.exports.sofi = mongoose.model("Sofi", UserSchema);
