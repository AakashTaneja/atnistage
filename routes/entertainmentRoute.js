const express = require('express');
const router = express.Router();
const { getAllEntertainmentNews } = require('../controllers/entertainmentController');

router.get('/', getAllEntertainmentNews);


module.exports = router