var express = require('express');
var router = express.Router();

var usersX = [
  {
    name : 'skrahat', password: '123'
  },
  {
    name : 'ben', password: '123'
  },
  {
    name : 'john', password: '123'
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res) {
  let result = usersX.find(user => user.name == req.body.name);
  if(result) {
    if(result.password == req.body.password){
      res.status(200).send( {
        message: "Successful"
      })
    } else {
      res.status(200).send( {
        message: "incorrect Password"
      })
    }
  } else {
    res.status(200).send({
      message: " no user found!"
    })
  }
  
});

module.exports = router;
