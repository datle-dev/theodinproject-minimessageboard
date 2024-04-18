const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require('body-parser');

const indexRouter = require("./routes/index");
const newRouter = require('./routes/new');

const app = express();

app.locals.messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Howdy!",
    user: "Jeff",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter);
app.use('/new', newRouter);

app.listen(8080, () => {
    console.log(`Server started on port ${8080}`)
});

module.exports = app;
