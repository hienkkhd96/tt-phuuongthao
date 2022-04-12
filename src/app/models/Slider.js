const mongoose = require("mongoose");

const HerosSchema = new mongoose.Schema({
  wel: { type: String, default: "Chào mừng bạn đến với Trung tâm Phương Thảo" },
  title: { type: String, default: "Nơi mang đến sự thành công cho bạn" },
  description: { type: String, default: "Trung tâm Phương Thảo" },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Sliders", HerosSchema);
