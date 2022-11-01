const mongoose = require('mongoose');

let birthSchema = new mongoose.Schema({
    fname:{
        type: String
    },
    mname:{
        type: String
    },
    lname:{
        type: String
    },
    fathername:{
        type: String
    },
    mothername:{
        type: String
    },
    gfather:{
        type: String
    },
    bdate:{
        type: Number
    },
    bdistrict:{
        type: String
    },
    baddress:{
        type: String
    }

})

const Birth = mongoose.model('Birth', birthSchema);

module.exports = Birth;