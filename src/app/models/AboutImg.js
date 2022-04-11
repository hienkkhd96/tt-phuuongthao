const mongoose = require("mongoose");

const AboutImg = new mongoose.Schema({
  imageUrl: {
    type: String,
    default:
      "https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
});
module.exports = mongoose.model("AboutImg", AboutImg);
