const mongoose = require("mongoose");

const SchemaBirth = new mongoose.Schema({
  fname: {
    type: String,
  },
  mname: {
    type: String,
  },
  lname: {
    type: String,
  },
  fathername: {
    type: String,
  },
  mothername: {
    type: String,
  },
  gfather: {
    type: String,
  },
  bdate: {
    type: String,
  },
  bdistrict: {
    type: String,
    required: true,
  },
  baddress: {
    type: String,
  },
});

const Birthdb  = mongoose.model("SchemaBirth", SchemaBirth)

module.exports = Birthdb ;
