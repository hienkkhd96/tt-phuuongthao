const mongoose = require("mongoose");

const AboutUs = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
});
module.exports = mongoose.model("AboutUs", AboutUs);
