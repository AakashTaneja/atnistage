const express = require('express');
const router = express.Router();
const { getAllVehiclesNews } = require('../controllers/vehiclesController');

router.get('/', getAllVehiclesNews);


module.exports = router