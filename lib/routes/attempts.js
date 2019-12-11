const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');

router.use(express.json());

router.post('/', (req, res) => {
  Attempt
    .create(req.body)
    .then(attempt => res.send(attempt));
});

router.get('/', (req, res) => {
  Attempt
    .find()
    .select({ name: true })
    .then(attempts => res.send(attempts));
});

router.get('/:id', (req, res) => {
  Attempt
    .findById(req.params.id)
    .then(attempt => res.send(attempt));
});

router.patch('/:id', (req, res) => {
  Attempt
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(attempt => res.send(attempt));
});

router.delete('/:id', (req, res) => {
  Attempt
    .findByIdAndDelete(req.params.id)
    .then(attempt => res.send(attempt));
});

module.exports = router;
