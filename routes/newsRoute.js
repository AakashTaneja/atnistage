const express = require('express');
const router = express.Router();
const {getAllNews, setNews, updateNews, deleteNews} = require('../controllers/newsController');

router.get('/', getAllNews);

router.post('/', setNews);

router.put('/:id', updateNews);

router.delete('/:id', deleteNews);

module.exports = router