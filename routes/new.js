const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
  console.log('post');
  console.log(req.body)
})

module.exports = router;
