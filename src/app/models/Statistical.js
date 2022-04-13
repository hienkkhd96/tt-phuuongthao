const mongoose = require("mongoose");

const Statistical = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
  icon: { type: String },
  color: { type: String, default: "#fff" },
});
module.exports = mongoose.model("Statistical", Statistical);
