import {io} from 'socket.io-client';
const PORT = process.env.REACT_APP_NODE_ENV || 5000;
// const origin = process.env.REACT_APP_ORIGIN || 'http://localhost:';

export const initSocket = () => {
   const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket']
    };

    return io(`http://localhost:${PORT}` , options);
};