const mongoose = require("mongoose");

const schema = mongoose.Schema({
  ShopID: { type: String, required: true },
  ShopName: { type: String, required: true },
  ShopAddress: { type: String, required: true },
});

module.exports = mongoose.model("Shop", schema);
