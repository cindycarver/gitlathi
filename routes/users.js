var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/throw', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/burn', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
