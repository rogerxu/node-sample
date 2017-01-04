var questions = [
  'What is your name?',
  'What is your favorite programming language?',
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(' > ');
}

process.stdin.on('data', function (data) {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', function () {
  process.stdout.write('\n\n');
  process.stdout.write(`Go ${answers[0]}, you can learn ${answers[1]}`)
  process.stdout.write('\n\n');
});

ask(0);
