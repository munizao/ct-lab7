const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.use(express.json());

router.post('/', (req, res) => {
  Recipe
    .create(req.body)
    .then(recipe => res.send(recipe));
});

router.get('/', (req, res) => {
  Recipe
    .find()
    .select({ name: true })
    .then(recipes => res.send(recipes));
});

router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(recipe => res.send(recipe));
});

router.patch('/:id', (req, res) => {
  Recipe
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(recipe => res.send(recipe));
});

router.delete('/:id', (req, res) => {
  Recipe
    .findByIdAndDelete(req.params.id)
    .then(recipe => res.send(recipe));
});

module.exports = router;
