var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/', function (req, res, next) {
  var candidates = db.collection('candidates');
  candidates.find(function(err, docs){
    if(err) {
      console.log(err);
    }

    res.render('index', {docs: JSON.stringify(docs)});
  });
});


module.exports = router;
