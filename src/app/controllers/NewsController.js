const Info = require("../models/Info/Info");
const toObject = require("../util/ToObject");

class NewsControllers {
  // [GET] /news
  index(req, res, next) {
    const info = () => Info.find({});
    Promise.all([info()])
      .then((response) => {
        return {
          info: toObject.multilObject(response[0]),
        };
      })
      .then((response) => {
        res.render("news", response);
      })
      .catch(next);
  }
}

module.exports = new NewsControllers();
