require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');  
var indexRouter = require('./routes/index');
var postRouter = require('./routes/posts');
var usersRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
const moment = require("moment");

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())

// router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/posts', postRouter);

// for date format
app.use(function(req, res, next) {
  res.locals.email = req.session.email;
  res.locals.first_name = req.session.full_name;
  res.locals.father_name = req.session.father_name;
  res.locals.loggedIn = req.session.loggedIn;
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (req, res, next) {
  const { sessionData } = req.session;
  
  if (sessionData) {
    req.locals.data = sessionData;
  }

  next()
})
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
