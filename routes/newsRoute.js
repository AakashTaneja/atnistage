const express = require('express');
const router = express.Router();
const { getAllNews } = require('../controllers/newsController');

router.get('/', getAllNews);

// router.get('/logos', getAllNewsLogos);

// router.post('/', setNews);

// router.put('/:id', updateNews);

// router.delete('/:id', deleteNews);

module.exports = router