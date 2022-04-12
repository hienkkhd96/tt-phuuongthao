const mongoose = require("mongoose");

const Contents = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
  title: { type: String, default: "Trung tâm Phương Thảo" },
  icon: { type: String },
});
module.exports = mongoose.model("Contents", Contents);
