var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Card1pickschema = new Schema({
category: String,
title: String,
itemColor: String,
itemSize: String
});

var Card1picks = mongoose.model("Card1picks", Card1pickschema);

module.exports = Card1picks;