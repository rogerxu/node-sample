var waitTime = 3000;
var currentTime = 0;
var waitInterval = 200;
var percentWaited = 0;

function writeWaitingPercent(percent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${percent}%`);
}

var interval = setInterval(function () {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function () {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\n\ndone');
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);
