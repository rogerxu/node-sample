/* eslint-env browser */
const socket = io('htpp://localhost:3000');

socket.on('connect', () => {
  setStatus('CONNECTED');
});

socket.on('disconnect', () => {
  setStatus('DISCONNECTED');
});

socket.on('message', (message) => {
  printMessage(message);
});

function sendMessage(message) {
  socket.emit('chat', message);
}

function setStatus(status) {
  document.getElementById('status').innerText = status;
}

function printMessage(message) {
  const messageEl = document.createElement('p');
  messageEl.innerText = message;
  document.getElementById('messages').appendChild(messageEl);
}
