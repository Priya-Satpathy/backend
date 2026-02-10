const express = require('express');
const { testControllers } = require('../controllers/testController');
const router = express.Router();

router.get('test',testControllers);

module.exports = router;