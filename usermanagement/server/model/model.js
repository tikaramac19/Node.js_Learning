const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;