var db = require('../config/db');
var basic = require('./basic')('candidates');

module.exports = {
  find: basic.find,
  findOne: basic.findOne,
  create: basic.create,
  update: basic.update,
  delete: basic.delete
};
