var express = require('express');
var router = express.Router();


router.get('/fender', function(req, res, next) {
    res.sendStatus(200).end();
});

router.get('/gibson', function(req, res, next) {
    res.sendStatus(200).end();
});
module.exports = router;
