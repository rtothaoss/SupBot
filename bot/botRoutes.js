const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../models');
const sup = require('../bot/supreme')


router.post('/accessoryBot1',(req, res) => {
    
   
      sup
      .accessoryBot1(req.body)
        .then(data => {
          res.json(data)
        })
        .catch(err => res.status(500).send(err));
  })

  router.post('/accessoryBot2', (req,res) => {
      
      sup
      .accessoryBot2(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => res.status(500).send(err))
    })

    router.post('/botWithSize1', (req,res) => {
      
      sup
      .botWithSize1(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => res.status(500).send(err))
    })

    router.post('/botWithSize2', (req,res) => {
      
      sup
      .botWithSize2(req.body)
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