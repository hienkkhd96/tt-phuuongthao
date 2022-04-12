const mongoose = require("mongoose");

const Contacts = new mongoose.Schema({
  description: { type: String, default: "Trung tâm Phương Thảo" },
  title: { type: String, default: "Trung tâm Phương Thảo" },
  icon: { type: String },
});
module.exports = mongoose.model("Contacts", Contacts);
