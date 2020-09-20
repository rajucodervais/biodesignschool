var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pagecontroller');
var userController = require('../controllers/userController');
const { check, body} = require('express-validator');
/* GET home page. */
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
router.get('/',redirectDashboard, pageController.index);

router.get('/page/:slug',redirectDashboard, pageController.post);
router.get('/register/:slug',redirectDashboard, pageController.register);

router.post('/user-registration',redirectDashboard,[
    check('full_name').not().isEmpty().withMessage('name is Required'),
    check('father_name').not().isEmpty().withMessage('father name is Required'),
    check('dob').not().isEmpty().withMessage('Date of birth is Required'),
    check('gender').not().isEmpty().withMessage('Gender is Required'),
    check('email').not().isEmpty().withMessage('email is Required').isEmail().withMessage('Email is not valid'),
    check('mobile').not().isEmpty().withMessage('Mobile Number is Required').isLength({ min: 10, max: 10 }).withMessage('Mobile number should contains 10 digits'),
    check('password').not().isEmpty().withMessage('password is Required').isLength({ min: 8 }).withMessage('password should be at least 8 characters'),
    check('cpassword').not().isEmpty().withMessage('Confirm password is Required').custom((value, { req }) => {
        if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
        }
        return true;
    }),
],
pageController.userRegistration);
router.post('/user-login', redirectDashboard, pageController.userLogin);

router.post('/apply-form',redirectLogin, userController.store);


// pages
router.get('/about',redirectDashboard, pageController.about);
router.get('/fellowship',redirectDashboard, pageController.fellowship);
router.get('/partners',redirectDashboard, pageController.partners);
router.get('/start-ups',redirectDashboard, pageController.start_ups);
router.get('/projects',redirectDashboard, pageController.projects);
router.get('/meditech',redirectDashboard, pageController.meditech);
module.exports = router;
