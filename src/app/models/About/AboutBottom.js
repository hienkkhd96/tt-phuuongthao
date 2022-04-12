const mongoose = require("mongoose");

const AboutBottom = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
  icon: { type: String },
  color: { type: String, default: "#0d6efd" },
});
module.exports = mongoose.model("AboutBottom", AboutBottom);
