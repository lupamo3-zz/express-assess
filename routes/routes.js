const express = require('express');
const router = express.Router();

//import controller
const Fetch = require('../controllers/fetch');

//routes
router.get('/', Fetch.home);
router.get('/users/', Fetch.fetch_all);

module.exports = router;