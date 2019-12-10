const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const attempt = new mongoose.Schema({
  recipeId: ObjectId,
  dateOfEvent: { type: Date, default: Date.now },
  notes: String,
  rating: Number
});

module.exports = mongoose.model('Attempt', attempt);
