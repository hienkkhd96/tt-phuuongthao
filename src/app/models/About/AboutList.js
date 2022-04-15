const mongoose = require("mongoose");

const AboutList = new mongoose.Schema({
  title: { type: String },
  counter: { type: Number },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("AboutList", AboutList);
