const mongoose = require("mongoose");

const AboutGifts = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  tab: { type: String },
  active: { type: String, default: "" },
  icon: { type: String },
  gift: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("AboutGifts", AboutGifts);
