const mongoose = require('mongoose');

const ingredient = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  measurement: {
    type: String,
    enum: ['teaspoon', 'tablespoon', 'cup', 'ounce', 'grams']
  },
  amount: Number
});

const recipe = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  directions: [String],
  ingredients: [ingredient]
});

module.exports = mongoose.model('Recipe', recipe);
