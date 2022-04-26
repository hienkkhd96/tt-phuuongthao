const AboutList1 = require("../models/About/AboutList1");
const Info = require("../models/Info/Info");
const AboutImg = require("../models/About/AboutImg");
const toObject = require("../util/ToObject");
const AboutGifts = require("../models/About/AboutGifts");
const Aboutlist2 = require("../models/About/Aboutlist2");

class AboutControllers {
  // [GET] /about
  index(req, res, next) {
    const info = () => Info.find({});
    const aboutList = () => AboutList1.find({});
    const aboutImg = () => AboutImg.find({});
    const aboutGifts = () => AboutGifts.find({});
    const aboutList2 = () => Aboutlist2.find({});

    Promise.all([info(), aboutList(), aboutImg(), aboutGifts(), aboutList2()])
      .then((response) => {
        return {
          info: toObject.multilObject(response[0]),
          aboutList1: toObject.multilObject(response[1]),
          aboutImg: toObject.multilObject(response[2]),
          aboutGifts: toObject.multilObject(response[3]),
          aboutList2: toObject.multilObject(response[4]),
        };
      })
      .then((response) => {
        res.render("about", response);
      })
      .catch(next);
  }
}

module.exports = new AboutControllers();
