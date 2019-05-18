const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
var cronScrape = require('./cron/index')
// var cors = require('cors');

const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// app.use(cors({
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supreme");

cronScrape.runCron()



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
