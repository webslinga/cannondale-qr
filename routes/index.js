var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET register. */
router.get('/register', function(req, res, next) {
  res.redirect(`https://www.cannondale.com/en-us/bike-registration/register?serial_number=${req.query.serial_number}`);
});

module.exports = router;
