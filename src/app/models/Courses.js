const mongoose = require("mongoose");

const Courses = new mongoose.Schema({
  name: {
    type: String,
    default: "Chào mừng bạn đến với Trung tâm Phương Thảo",
  },
  price: { type: String, default: "Giảng viên" },
  time: { type: String, default: "Trung tâm Phương Thảo" },
  content: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Courses", Courses);
