const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");

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
    res.json(results);
    
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

       ()=> res.json(results) 

        res.json(results);
      
  });
      
    });
}

module.exports = router;
