var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "skrahat", point: "1000"},
    {id: 2, username: "john", point: "300"},
    {id: 3, username: "ben", point: "2000"},
  ]);
});





module.exports = router;
