const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Person(name) {
  this.name = name;
}

util.inherits(Person, EventEmitter);

module.exports = Person;
