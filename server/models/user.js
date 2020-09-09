const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
  name: String,
  surname: String,
  password: String,
  age: Number,
  login: String,
  TaskList: [],
  phone: String,
  endDate: String
});

module.exports = mongoose.model('User', user);
