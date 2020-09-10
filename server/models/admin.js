const mongoose = require('mongoose');
const { Schema } = mongoose;

const admin = new Schema({
    name: String,
    surname: String,
    password: String,
    login: String,
    phone: String,
});

module.exports = mongoose.model('Admin', admin);
