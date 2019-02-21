let express = require('express');
const router = express.Router();

router.get('/users', function(req, res) {
  res.send({String:"hey now"});
});

router.post('/users', function(req, res) {
  let user_id = req.body.id;
  res.send("User id is "+ user_id);
});

//tested with x-www-form-urlencoded


module.exports = router;
