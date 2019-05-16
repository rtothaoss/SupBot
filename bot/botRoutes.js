const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../models');
const sup = require('../bot/supreme')


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

    router.post('/tester', (req,res) => {
      
      sup
      .tester(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => res.status(500).send(err))
    })



  module.exports = router;