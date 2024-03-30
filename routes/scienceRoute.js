const express = require('express');
const router = express.Router();
const { getAllScienceNews } = require('../controllers/scienceController');

router.get('/', getAllScienceNews);


module.exports = router