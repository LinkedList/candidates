var ObjectId = require('mongojs').ObjectId;
var db = require('../config/db');

var colModel = function (col) {
  var table = db.collection(col);

  var find = function (call) {
    table.find({}, call);
  };

  var findOne = function (_id, call) {
    table.findOne({_id: ObjectId(_id)}, call);
  };

  var create = function (obj, call) {
    table.save(obj, call);
  };

  var update = function (_id, obj, call) {
    table.findOne({_id: ObjectId(_id)}, function (err, doc) {
      if(err) {
          call(err);
          return;
      }

      if(!doc) {
        call(new Error("No Object with given id."));
        return;
      }

      for(var prop in obj) {
        doc[prop] = obj[prop];
      }

      table.save(doc, call);
    });
  };

  var del = function (_id, call) {
    table.remove({_id: ObjectId(_id)}, call);
  };

  return {
    find: find,
    findOne: findOne,
    create: create,
    update: update,
    delete: del
  };
};

module.exports = colModel;
