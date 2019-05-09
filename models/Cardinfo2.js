var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CCschema2 = new Schema({
name2: String,
email2: String,
telephone2: String,
address2: String,
zipcode2: String,
city2: String,
cc2: String,
ccMonth2: String,
ccYear2: String,
CVV2: String,
});

var Cardinfo2 = mongoose.model("Cardinfo2", CCschema2);

module.exports = Cardinfo2;