var express = require('express');
var router = express.Router();

/* GET rewards listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, rewardName: "AmazonGiftCard", startDate: "1/05/2021",endDate: "31/05/2021"},
  ]);
});

/* GET rewards listing. */
router.get('/winners', function(req, res, next) {
    res.json([
      {id: 1, winnerName: "john",},
    ]);
  });



module.exports = router;