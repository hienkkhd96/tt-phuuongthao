const mongoose = require("mongoose");

const Mentor = new mongoose.Schema({
  name: {
    type: String,
    default: "Chào mừng bạn đến với Trung tâm Phương Thảo",
  },
  position: { type: String, default: "Giảng viên" },
  description: { type: String, default: "Trung tâm Phương Thảo" },
  exp: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Mentor", Mentor);
