const express = require('express');
const app = express();
const recipes = require('./routes/recipes');
const attempts = require('./routes/attempts');

app.use('/api/v1/recipes', recipes);
app.use('/api/v1/attempt', attempts);

module.exports = app;
