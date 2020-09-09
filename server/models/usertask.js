const mongoose = require('mongoose');
const { Schema } = mongoose;

const userTask = new Schema({
    photo: String,
    status: Boolean,
    link: String,
    edge: String,
});

module.exports = mongoose.model('userTask', userTask);
