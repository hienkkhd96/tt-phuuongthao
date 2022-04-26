const mongoose = require("mongoose");

const AboutList2 = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
  title: { type: String, default: "Trung tâm Phương Thảo" },
  icon: { type: String },
});
module.exports = mongoose.model("AboutList2", AboutList2);
