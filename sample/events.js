import { EventEmitter } from 'events';
import util from 'util';

function Person(name) {
  this.name = name;
}

util.inherits(Person, EventEmitter);

const roger = new Person('Roger');
roger.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

roger.emit('speak', 'Hello World');
