
import { useState, useEffect, useRef } from 'react';
import Client from './Client';
import { initSocket } from '../utils/socket';

function CodeBlockPage({ blockId }) {

  const socketRef = useRef(null);
  const blocks = useRef([]);

  const [code, setCode] = useState('');
  const [isMentor, setIsMentor] = useState(true);
  const [clients, setClients] = useState([]);


  useEffect(() => {
    const visitor = isMentor ? 'Mentor' : 'Student';
    setIsMentor(false);

    const init = async () => {
      socketRef.current = await initSocket();

      //recive code blocks from server
      socketRef.current.on('code-blocks', (codeBlocks) => {
        blocks.current = codeBlocks;
        const initCode = blocks.current[blockId].code;
        setCode(initCode)
        socketRef.current.emit('codeUpdated', initCode);
       
      })

      //recive clients list from server
      socketRef.current.on('new-client-connected', (clients) => {
        setClients(clients);
      })

      //recive client type from server
      socketRef.current.on('client-connected', (isMentor, clientsList) => {
        setIsMentor(isMentor);
        setClients(clientsList);
      })

      //receive code from server
      socketRef.current.on('code', (sharedCode) => {
        setCode(sharedCode);
      })

    };
    init();
    
    
  }, [])

  //update sharedCode and send it to the server
  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    socketRef.current.emit('codeUpdated', newCode);
  };

  return (
    <div className='cosdeBlockPage'>
      <img src='/code-logo.png' alt='code-fun-logo' height={100} />
      <div className='mainWrap'>
        <div className='aside'>
          <h3>Connected</h3>
          <div className='clientsList'>
            {
              clients.map((client) => (
                <Client key={client.socketId} username={client.username} />
              ))
            }
          </div>
        </div>
        <div className='editorSide'>
          <textarea
            value={code}
            onChange={handleCodeChange}
            readOnly={isMentor}
            className='code-hightlight'
          />
        </div>
      </div>
    </div>
  )
}
export default CodeBlockPage