
import toast from 'react-hot-toast';
import { useState, useEffect, useRef} from 'react';
import Client from '../components/Client';
import CodeEditor from '../components/CodeEditor';
import { initSocket } from '../utils/socket';
function CodeBlockPage() {

  const value = `import logo from './logo.svg';
  import './App.css';
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
  export default App; `

  const socketRef = useRef(null);
  const [code, setCode] = useState(value);
  const [isMentor, setIsMentor] = useState(true);
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Mentor Tom' },
    { socketId: 2, username: 'Student Josh' }
  ]);


  useEffect(() => {
    const visitor = isMentor ? 'Mentor' : 'Student';
    toast.success(`Welcome ${visitor}!`);
  
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit('send-code', code );
      socketRef.current.on('receive-code', (code) => {
        setCode(code);
      })
    };

    init();
    }, [])

    const handleValueChange = (newValue, event) => {
      setCode(newValue);      
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
        <CodeEditor value = {code} onValueChange= {handleValueChange}/>
        </div>
      </div>
    </div>
  )
}
export default CodeBlockPage