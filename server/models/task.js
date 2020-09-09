const mongoose = require('mongoose');
const { Schema } = mongoose;

const task = new Schema({
  title: String,
  text: String,
  photo: String,
  date: String,
});

module.exports = mongoose.model('Task', task);
