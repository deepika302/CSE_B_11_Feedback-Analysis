const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  replier: String,
  answer: String
});

const juniorSchema = new mongoose.Schema({
  name: String,
  doubt: String,
  replies: [replySchema]
});

module.exports = mongoose.model('Junior', juniorSchema);
