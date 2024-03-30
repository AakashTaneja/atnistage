const express = require('express');
const router = express.Router();
const { getAllHealthNews } = require('../controllers/healthController');

router.get('/', getAllHealthNews);


module.exports = router