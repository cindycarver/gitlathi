var express = require('express');
var router = express.Router();


router.get('/direct', function(req, res, next) {
    res.sendStatus(200).end();
});
module.exports = router;
