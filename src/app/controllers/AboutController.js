const AboutList = require("../models/About/AboutList");
const Info = require("../models/Info/Info");
const AboutImg = require("../models/About/AboutImg");
const toObject = require("../util/ToObject");

class AboutControllers {
  // [GET] /about
  index(req, res, next) {
    const info = () => Info.find({});
    const aboutList = () => AboutList.find({});
    const aboutImg = () => AboutImg.find({});

    Promise.all([info(), aboutList(), aboutImg()])
      .then((response) => {
        return {
          info: toObject.multilObject(response[0]),
          aboutList: toObject.multilObject(response[1]),
          aboutImg: toObject.multilObject(response[2]),
        };
      })
      .then((response) => {
        res.render("about", response);
      })
      .catch(next);
  }
}

module.exports = new AboutControllers();
