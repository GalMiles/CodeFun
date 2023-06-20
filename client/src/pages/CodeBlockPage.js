import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Client from '../components/Client';
import CodeEditor from '../components/CodeEditor';
function CodeBlockPage() {

  const [clients, setClients] = useState([
    { socketId: 1, username: 'Mentor Tom' },
    { socketId: 2, username: 'Student Josh' }
  ]);

  useEffect(() => {
    toast.success('You are in the CodeBlockPage!');
  })

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
          <CodeEditor />
        </div>
      </div>

    </div>
  )
}

export default CodeBlockPage