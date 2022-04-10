const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 3000;

const route = require("./routes/index");
const db = require("./config/db");
db.connect()

app.use(express.static(path.join(__dirname, "public")));
//HTTP loger
app.use(morgan("tiny"));

//Template engine
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
