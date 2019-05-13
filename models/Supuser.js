var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SupuserSchema = new Schema({
  googleId: String,
  name: String
});

var Supuser = mongoose.model("Supuser", SupuserSchema);

module.exports = Supuser;