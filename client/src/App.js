import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LobbyPage from './pages/LobbyPage';
import CodeBlockPage from './pages/CodeBlockPage';
import {Toaster} from 'react-hot-toast';
import { useState } from 'react';
function App() {

  const[blockId, setBlockId] = useState('');

  function handleClick(id) {
    setBlockId(id);
  }

  return (
    <div className="App">
      <div>
        <Toaster
          position='bottom-left'
          toastOptions={{
            success: {
              theme: {
                primary: 'green',
              },
            },
          }}></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LobbyPage handleClick = {handleClick}/>}/>
          <Route path="/editor/:codeBlockId" element={<CodeBlockPage blockId={blockId}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
