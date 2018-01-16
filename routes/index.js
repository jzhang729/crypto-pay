const express = require('express');
const router = express.Router();

const payController = require('../controllers/payController');

router.get('/', payController.homePage);
router.get('/:id', payController.pay);

module.exports = router;
