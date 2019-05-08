var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CCschema2 = new Schema({
name: String,
email: String,
telephone: String,
address: String,
zipcode: String,
city: String,
cc: String,
ccMonth: String,
ccYear: String,
CVV: String,
});

var Cardinfo2 = mongoose.model("Cardinfo2", CCschema2);

module.exports = Cardinfo2;