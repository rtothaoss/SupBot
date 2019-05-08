var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Card2pickschema = new Schema({
category: String,
title: String,
itemColor: String,
itemSize: String
});

var Card2picks = mongoose.model("Card2picks", Card2pickschema);

module.exports = Card2picks;