var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CCschema1 = new Schema({
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

var Cardinfo1 = mongoose.model("Cardinfo1", CCschema1);

module.exports = Cardinfo1;