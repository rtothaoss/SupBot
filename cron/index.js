var cron = require('node-cron');
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../models');

const axios = require("axios");

// scrapeSup = () => {
//     axios.get('http://localhost:3002/api/scrape')
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// deleteDrop = () => {
//     axios.delete('http://localhost:3002/api/droplist')
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
// }


const scrapeSup = () => {
  var droplistLink = ''

  axios.get("https://www.supremecommunity.com/season/spring-summer2019/droplists/").then(function (response) {
  
    var $ = cheerio.load(response.data);


    $("div#box-latest").each(function (i, element) {
     
      var result = {};


      result.droplistLink = $(this)

        .find('a')
        .attr("href");

      droplistLink = `https://www.supremecommunity.com${result.droplistLink}`  
                

    });

    droplistPage();
    res.send("scrape Complete");
    
  });


function droplistPage() {  
  axios.get(droplistLink).then(function (response) {
  
    var $ = cheerio.load(response.data);


    $("div.masonry__item").each(function (i, element) {
     
      var result = {};

     
      result.title = $(this)
        .find('.card-details')
        .attr('data-itemname')

      result.summary = $(this) 
          .find('img')
          .attr('alt')
      // result.link = $(this)

      result.img = $(this)
          .find('img')
          .attr('src')
      
      result.price = $(this)
      .find('.label-price')
      .text()

      result.category = $(this)
      .attr('data-masonry-filter');



      db.Droplist.create(result)
      
      
      .then(function (dbDroplist) {

        console.log(dbDroplist);
      })
      .catch(function (err) {

        console.log(err);
      });
  });
      
    });
}
}


const deleteDrop = () => {
  db.Droplist
  .deleteMany({})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
}



function runCron() {
  
    var task = cron.schedule('1 * * * *', () =>  {
        deleteDrop()
        scrapeSup()
      console.log('cron ran')
      }, {
        scheduled: false
      });   
      task.start();
}

module.exports.runCron = runCron



