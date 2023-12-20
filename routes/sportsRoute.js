const express = require('express');
const router = express.Router();
const { getAllSportsNews } = require('../controllers/sportsController');

router.get('/', getAllSportsNews);


module.exports = router