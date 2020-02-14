var express = require('express');
var router = express.Router();

/* GET home page. */
// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/menu/', function(req, res, next) {
  res.send(`choose any item ${req.query.name}`);
});

module.exports = router;
