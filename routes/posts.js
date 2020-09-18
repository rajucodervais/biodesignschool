var express = require('express');
var router = express.Router();
const { check,body, validationResult } = require('express-validator');
const PostController = require('../controllers/postController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const redirectLogin = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/admin/login');
    } else {
        next();
    }
  }


/* GET home page. */
router.get('/', PostController.index);
router.get('/create',PostController.create);
router.post('/store',[
    check('title').not().isEmpty().withMessage('title required'),
    check('description').not().isEmpty().withMessage('description required'),
    check('date_published').not().isEmpty().withMessage('published date requires'),
    check('from_date').not().isEmpty().withMessage('from date requires'),
    check('to_date').not().isEmpty().withMessage('end date requires'),
],PostController.store);
router.get('/edit/:id',PostController.edit);
router.post('/update',[
    check('title').not().isEmpty().withMessage('title required'),
    check('description').not().isEmpty().withMessage('description required'),
    check('date_published').not().isEmpty().withMessage('published date requires'),
    check('from_date').not().isEmpty().withMessage('from date requires'),
    check('to_date').not().isEmpty().withMessage('end date requires'),
],PostController.update);
router.get('/destroy/:id', PostController.destroy);
router.get('/view/:id', PostController.view);
router.post('/ckuploader',multipartMiddleware,PostController.ckUploader);


module.exports = router;
