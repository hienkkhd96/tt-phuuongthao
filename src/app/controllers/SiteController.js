const AboutBottom = require("../models/About/AboutBottom");
const AboutImg = require("../models/About/AboutImg");
const AboutUs = require("../models/About/AboutUs");
const Contacts = require("../models/Contacts");
const Contents = require("../models/Contents");
const Library = require("../models/Library");
const Mentor = require("../models/Mentor");
const Sliders = require("../models/Slider");
const toObject = require("../util/ToObject");

class SiteControllers {
  // [GET] home
  index(req, res, next) {
    const aboutUs = () => AboutUs.find({});
    const sliders = () => Sliders.find({});
    const aboutImg = () => AboutImg.find({});
    const aboutBottom = () => AboutBottom.find({});
    const contacts = () => Contacts.find({});
    const contents = () => Contents.find({});
    const library = () => Library.find({});
    const mentor = () => Mentor.find({});
    Promise.all([
      aboutUs(),
      sliders(),
      aboutImg(),
      aboutBottom(),
      contacts(),
      contents(),
      library(),
      mentor(),
    ])
      .then((response) => {
        return {
          aboutUs: toObject.multilObject(response[0]),
          sliders: toObject.multilObject(response[1]),
          aboutImg: toObject.multilObject(response[2]),
          aboutBottom: toObject.multilObject(response[3]),
          contacts: toObject.multilObject(response[4]),
          contents: toObject.multilObject(response[5]),
          library: toObject.multilObject(response[6]),
          mentor: toObject.multilObject(response[7]),
        };
      })
      .then((response) => {
        res.render("home", response);
      })
      .catch(next);
  }
}

module.exports = new SiteControllers();
