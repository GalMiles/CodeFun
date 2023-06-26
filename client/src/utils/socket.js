import {io} from 'socket.io-client';
const origin = process.env.REACT_APP_NODE_PORT || 'http://localhost:5000';

export const initSocket = () => {
   const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
    };

    console.log(`connecting to socket ${origin}`);
    return io( `${origin}`, options);
};