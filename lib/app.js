const express = require('express');
const app = express();
const recipes = require('./routes/recipes');

app.use('/api/v1/recipes', recipes);

module.exports = app;
