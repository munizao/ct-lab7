const mongoose = require('mongoose');

const attempt = new mongoose.Schema({
  dateOfEvent: { type: Date, default: Date.now },
  notes: String,
  rating: Number
});

module.exports = mongoose.model('Attempt', attempt);
