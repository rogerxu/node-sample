var ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('Connected to chat');
};

ws.onclose = () => {
  console.log('DISCONNECTED');
};

ws.onmessage = (payload) => {
  console.log('Server:', payload.data);
};
