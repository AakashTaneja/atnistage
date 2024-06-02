const express = require('express');
const router = express.Router();
const { getAllWorldNews } = require('../controllers/worldController');

router.get('/', getAllWorldNews);


module.exports = router