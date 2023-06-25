import {io} from 'socket.io-client';
const PORT = process.env.PORT || 5000;

export const initSocket = () => {
   const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
    };

    return io(`http://localhost:${PORT}` , options);
};