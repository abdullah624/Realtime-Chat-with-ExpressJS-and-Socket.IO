const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));