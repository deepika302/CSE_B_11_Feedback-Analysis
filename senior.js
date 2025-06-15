const mongoose = require('mongoose');

const seniorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String }, // Add this if role is submitted from frontend
  questions: { type: String, required: true },
  tips: { type: String, required: true }
});

module.exports = mongoose.model('Senior', seniorSchema);
  