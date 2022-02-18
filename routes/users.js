var express = require('express');
var router = express.Router();

// Name: Bhagyesh Bhavsar
// Student ID: 301153525
// Date: 17th Feb, 2021

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Nothing there');
});

module.exports = router;
