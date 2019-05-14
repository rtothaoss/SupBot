var cron = require('node-cron');
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../models');

const axios = require("axios");

scrapeSup = () => {
    axios.get('http://localhost:3002/api/scrape')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

deleteDrop = () => {
    axios.delete('http://localhost:3002/api/droplist')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
}




function runCron() {
    var task = cron.schedule('* * * * *', () =>  {
        deleteDrop()
        scrapeSup()
      }, {
        scheduled: false
      });   
      task.start();
}

module.exports.runCron = runCron



