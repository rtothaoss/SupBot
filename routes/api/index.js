const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../../models');

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

var droplistLink = ''
  
router.get("/scrape", function (req, res) {
  
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

      result.style = $(this)
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

router.get("/droplist", function (req, res) {
  db.Droplist.find({}).then(function (dbDroplist) {
    res.json(dbDroplist)
  })
    .catch(function (err) {
      res.json(err)
    })
});

// app.get('/bot', (req, res) => {
//   const SupremeBot = new Promise ((resolve, reject) =>{
//     sup
//     .supremeCard1()
//       .then(data => {
//         resolve(data)
//       })
//       .catch(err => reject('SupremeBot Failed!'))
//   })
//   const SupremeBot2 = new Promise((resolve, reject) => {
//     sup
//     .supremeCard2()
//     .then(data => {
//       resolve(data)
//     })
//     .catch(err => reject('SupremeBot2 Failed!'))
//   })
//   Promise.all([SupremeBot, SupremeBot2])
//   .then(data => {
//     res.render('index')
//   })
//   .catch(err => res.status(500).send(err))
// })

module.exports = router;
