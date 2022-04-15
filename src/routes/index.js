const newsRouter = require("./about");
const siteRouter = require("./site");

function route(app) {
  app.use("/about", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
