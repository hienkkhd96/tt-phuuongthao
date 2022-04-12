const mongoose = require("mongoose");

const Library = new mongoose.Schema({
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Library", Library);
