const express = require('express');
const router = express.Router();
const { getAllTrendingNews } = require('../controllers/trendingController');

router.get('/', getAllTrendingNews);


module.exports = router