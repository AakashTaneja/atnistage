const express = require('express');
const router = express.Router();
const { getAllMarketsNews } = require('../controllers/marketsController');

router.get('/', getAllMarketsNews);


module.exports = router