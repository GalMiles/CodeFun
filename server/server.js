const express = require('express');
const app = express();
const http = require('http');
const server= http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const PORT = process.env.PORT || 5000;

//every single time a client connect to the server
io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
    socket.on('send-code', (code ) => {
        io.emit('receive-code', code);
        console.log(code);
    })
});

server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })