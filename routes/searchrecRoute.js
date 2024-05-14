const express = require('express');
const router = express.Router();
const { getAllSearchRec } = require('../controllers/searchrecController');

router.get('/', getAllSearchRec);


module.exports = router