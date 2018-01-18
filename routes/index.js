const express = require('express');
const router = express.Router();
const path = require('path');

const authController = require('../controllers/authController');
const payController = require('../controllers/payController');

// Auth Routes
router.get('/shopify', authController.install);
router.get('/auth/shopify/callback', authController.authorize);

router.get('/', authController.landingPage);
router.get('/pay/:productID', payController.pay);
router.post('/submit', payController.submit);

module.exports = router;
