var express = require('express');
var router = express.Router();

router.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  res.send(user_id );
});

/*
router.post('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');


  res.send(user_id + ' ' + token + ' ' + geo);
});

*/
router.post('/api/users', function(req, res) {
  var user_id = req.body('id');

  res.send(user_id );
});




module.exports = router;
