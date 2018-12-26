var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/throw', function(req, res, next) {
  res.sendStatus(200).end();
});

router.get('/burn', function(req, res, next) {
  res.sendStatus(403).end();
});

router.get('/drown', function(req, res, next) {
  res.sendStatus(403).end();
});

router.get('/pull', function(req, res, next) {
  res.sendStatus(403).end();
});

router.get('/push', function(req, res, next) {
  res.sendStatus(403).end();
});

module.exports = router;
