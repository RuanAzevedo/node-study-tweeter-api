const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const controllers = requireDir('./controllers');

const authMiddleware = require('./middlewares/auth');

console.log(controllers);

/**
 * Auth
 */
routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

/**
 * ==================
 * Auth routes
 */
routes.use(authMiddleware);

routes.get('/tweets', (req, res) => {
  res.send('OK');
});

module.exports = routes;
