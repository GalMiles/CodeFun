const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const db = require('./database/db.js');
require('dotenv').config();

const PORT = process.env.PORT;;

let clientsList = [];
let isMentor = true;
let sharedCode = ' '

//create a socket connection
io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    //fetching data from db
    async function getDataFromDB() {
        try {
            const codeBlocks = await db.getCodeBlocks();
            return codeBlocks;
        }
        catch (error) {
            console.log('error getting data from db', error);
        }
    }

    db.connectDB();
    getDataFromDB().then((codeBlocks) => {
        socket.emit('code-blocks', codeBlocks);
    })


    //receive code from client
    socket.on('codeUpdated', (newCode) => {
        sharedCode = newCode;
        socket.broadcast.emit('code', sharedCode);
    })

    //sent shredCode to client
    socket.emit('code', sharedCode);

    //limit only 2 clients
    //add client to clientsList
    if (clientsList.length == 0) {
        isMentor = true;
        clientsList.push({ socketId: socket.id, username: 'Mentor Tom', isMentor: isMentor});
    }

    else if (clientsList.length == 1) {
        isMentor = false;
        clientsList.push({ socketId: socket.id, username: 'Student Josh', isMentor: isMentor });
    }
    else {
        clientsList.push({ socketId: socket.id, username: 'Student', isMentor: isMentor });
    }

    console.log(clientsList);
    socket.emit('client-connected', isMentor, clientsList);
    socket.broadcast.emit('new-client-connected', clientsList);



});
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })
