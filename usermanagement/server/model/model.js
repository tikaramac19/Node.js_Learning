const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: string,
        required: [true, 'Please enter your name']
    },
    email: {
        type: string,
        required: [true, 'Please enter your email'],
        unique: true
    },
    gender: string,
    status: string
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;