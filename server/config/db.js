var properties = require('./properties');
var mongojs = require('mongojs');

var db = mongojs(properties.mongoconn);

var neededIndexes = ['_id', 'name', 'email'];
var candidates = db.collection('candidates');

var index = function (name) {
  var i = {};
  i[name] = 1;
  db.collection('candidates').createIndex(i, function(err, doc){
    if(err) {
      console.log("Error creating index:", i);
      return;
    }
    console.log("Created index:", i);
  });
};

db.collection('candidates').getIndexes(function(err, docs) {
  if(err) {
    console.log(err);
    return;
  }

  var indexes = docs.map(function(i, index) {
    return Object.keys(i.key)[0];
  });

  neededIndexes.forEach(function(i) {
    if(indexes.indexOf(i) === -1) {
      index(i);
    }
  });

});

module.exports = db;
