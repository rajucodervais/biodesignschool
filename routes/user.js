var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const redirectLogin = (req, res, next) => {
  if (!req.session.loggedIn) {
      res.redirect('/register/:slug');
  } else {
      next();
  }
}

const redirectDashboard = (req, res, next) => {
  if (req.session.loggedIn) {
      res.redirect('/users');
  } else {
      next();
  }
}
/* GET users listing. */
router.get('/',redirectLogin, userController.index);

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/register/:slug');
})

router.post('/apply-form',redirectLogin, userController.store);

module.exports = router;
