const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../models');
const sup = require('../bot/supreme')

    let BASE_URL = 'https://www.supremenewyork.com/shop/all/accessories'
    let CHECKOUT =  'https://www.supremenewyork.com/checkout'
    let itemList1 = 'Supreme®/Hanes® Tagless Tees (3 Pack)'
    let name = 'Ross Carmack'
    let email = "test@gmail.com"
    let telephone = "2142846049"
    let address = '111 Test Drive'
    let zipcode = '75075'
    let city = 'Plano'
    let cc = '1111111111111111'
    let ccMonth = '11'
    let ccYear = '2021'
    let CVV = '111'


router.post('/bot1',(req, res) => {
    
   
      sup
      .supremeCard1(req.body)
        .then(data => {
          res.json(data)
        })
        .catch(err => res.status(500).send(err));
  })

  router.post('/bot2', (req,res) => {
      
      sup
      .supremeCard2(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => res.status(500).send(err))
    })



  module.exports = router;