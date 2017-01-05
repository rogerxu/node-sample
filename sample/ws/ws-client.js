/* eslint-env browser */
const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  setStatus('CONNECTED');
};

ws.onclose = () => {
  setStatus('DISCONNECTED');
};

ws.onmessage = (payload) => {
  console.log('Message:', payload.data);
  printMessage(payload.data);
};

function setStatus(status) {
  document.getElementById('status').innerText = status;
}

function printMessage(message) {
  const messageEl = document.createElement('p');
  messageEl.innerText = message;
  document.getElementById('messages').appendChild(messageEl);
}
