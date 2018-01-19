const authController = require('../controllers/authController');

module.exports = app => {  
  app.get('/shopify', authController.install);
  app.get('/auth/shopify/callback', authController.authorize);
}
