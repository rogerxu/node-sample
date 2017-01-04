const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const person = {
  name: '',
  sayings: [],
};

rl.question('What is your name? ', function (answer) {
  person.name = answer;
  rl.setPrompt(`What would ${person.name} say? `);
  rl.prompt();

  rl.on('line', function (saying) {
    person.sayings.push(saying.trim());

    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      rl.setPrompt(`What else would ${person.name} say? ('exit' to leave) `);
      rl.prompt();
    }
  });
});

rl.on('close', function () {
  console.log('%s says %j', person.name, person.sayings);
  process.exit();
});
