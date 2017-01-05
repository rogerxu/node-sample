const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(express.static('./public'));

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('chat', (message) => {
    // send to everyone
    io.emit('message', message);

    // send to everyone except this socket
    // socket.broadcast.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.emit('message', 'Welcome to chat');
});

server.listen(3000, () => {
  console.log('Starting Socket App on *:3000');
});
