const express = require('express');
const router = express.Router();
const {getHomepage, hoidanit} = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/hoidanit', hoidanit);

module.exports = router