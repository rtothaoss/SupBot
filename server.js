const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
var cronScrape = require('./cron/index')
var cors = require('cors');
const keys = require('./config/keys')
const passport = require("passport")
const passportSetup = require('./config/passport-setup')
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");


const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

app.use(cookieParser());

app.use(passport.initialize());

app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000", // allow to server to accept request from different origin
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true // allow session cookie from browser to pass through
//   })
// );


const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});



app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds019936.mlab.com:19936/heroku_v0kh9l0z");

cronScrape.runCron()



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
