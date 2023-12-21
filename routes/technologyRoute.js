const express = require('express');
const router = express.Router();
const { getAllTechnologyNews } = require('../controllers/technologyController');

router.get('/', getAllTechnologyNews);


module.exports = router