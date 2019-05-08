const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");
var db = require('../../models');


router.get("/droplist", function (req, res) {
  db.Droplist.find({}).then(function (dbDroplist) {
    res.json(dbDroplist)
  })
    .catch(function (err) {
      res.json(err)
    })
});

router.post('/card1picks', function(req, res) {
  console.log(req.body)
  db.Card1picks.create(req.body).then(function(dbModel) {
    res.json(dbModel)
  })
  .catch(function (err) {
    res.json(err)
  })
})

router.post('/card1', function (req, res) {
  db.Cardinfo1
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
})

router.post('/card2', function (req, res) {
  db.Cardinfo2
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
})



router.post('/card2picks', function (req, res) {
  db.Card2picks
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err))
})

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
