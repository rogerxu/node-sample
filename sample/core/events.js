const Person = require('../lib/Person');

const roger = new Person('Roger');
roger.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

roger.emit('speak', 'Hello World');
