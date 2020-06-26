const mongoose = require("mongoose");

const DevicesSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  token: { type: String, unique: true },
  platform: { type: String }
});

module.exports = mongoose.model("devices", DevicesSchema);
