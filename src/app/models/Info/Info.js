const mongoose = require("mongoose");

const Info = new mongoose.Schema({
  name: {
    type: String,
    default: "Trung tâm tiếng trung phương thảo",
  },
  address: {
    type: String,
    default: "Số 3, Đường 1/5, Thị trấn Tứ Kỳ, huyện Tứ Kỳ, tỉnh Hải Dương",
  },
  openTime: { type: String, default: "8:00-20:00" },
  email: { type: String, default: "phuongnguyen9394hp@gmail.com" },
  phone: { type: String, default: "0328162689" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  logo: { type: String, default: "" },
});
module.exports = mongoose.model("Info", Info);
