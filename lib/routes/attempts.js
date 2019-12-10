const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');

router.use(express.json());
module.exports = router;
