var express = require('express');
var router = express.Router();

// Name: Bhagyesh Bhavsar
// Student ID: 301153525
// Date: 17th Feb, 2021

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us'});
});


/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us'});
});


module.exports = router;
