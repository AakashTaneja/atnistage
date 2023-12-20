const express = require('express');
const router = express.Router();
const { getAllSections } = require('../controllers/sectionsController');

router.get('/', getAllSections);

// router.get('/logos', getAllNewsLogos);

// router.post('/', setNews);

// router.put('/:id', updateNews);

// router.delete('/:id', deleteNews);

module.exports = router