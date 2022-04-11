const AboutBottom = require("../models/AboutBottom");
const AboutImg = require("../models/AboutImg");
const AboutUs = require("../models/AboutUs");
const Sliders = require("../models/Slider");
const toObject = require("../util/ToObject");

class SiteControllers {
  // [GET] home
  index(req, res, next) {
    const aboutUs = () => AboutUs.find({});
    const sliders = () => Sliders.find({});
    const aboutImg = () => AboutImg.find({});
    const aboutBottom = () => AboutBottom.find({});
    Promise.all([aboutUs(), sliders(), aboutImg(), aboutBottom()])
      .then((response) => {
        return {
          aboutUs: toObject.multilObject(response[0]),
          sliders: toObject.multilObject(response[1]),
          aboutImg: toObject.multilObject(response[2]),
          aboutBottom: toObject.multilObject(response[3]),
        };
      })
      .then((response) => {
        res.render("home", response);
      })
      .catch(next);
  }
}

module.exports = new SiteControllers();
