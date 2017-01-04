const spawn = require('child_process').spawn;

const cp = spawn('node', ['exec']);

cp.stdout.on('data', function (data) {
  console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function () {
  console.log('Child process has ended');
  process.exit();
});

setTimeout(function () {
  cp.stdin.write('stop');
}, 4000);
