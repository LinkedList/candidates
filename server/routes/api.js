var express = require('express');
var router = express.Router();

var can = require("../models/candidates");
var url = '/candidates/';

var sendOrError = function(err, doc) {
  if(err) {
    console.log(err);
    this.next(err);
    return;
  }
  this.res.json(doc);
};

router.route(url)
  .get(function (req, res, next) { // find all
    can.find(sendOrError.bind({res: res, next: next}));
  })
.post(function (req, res, next) { // create new
  can.create(
      req.body,
      sendOrError.bind({res: res, next: next})
      );
});

router.route(url + ":id")
.get(function (req, res, next) { // find one
  can.findOne(
      req.params.id,
      sendOrError.bind({res: res, next: next})
      );
})
.post(function (req, res, next) { // update one
  can.update(
      req.params.id,
      req.body,
      sendOrError.bind({res: res, next: next})
      );
})
.delete(function (req, res, next) { // delete one
  can.delete(
      req.params.id,
      sendOrError.bind({res: res, next: next})
      );
});

module.exports = router;
