import {React, useState} from 'react'
import '../App.css'
import CodeBlockPage from '../components/CodeBlockPage'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';


function LobbyPage() {

  const [showHome, setShowHome] = useState(true);

  function handleClick(){
    setShowHome(false);
  }

  return (
    <BrowserRouter>
      <div className='lobbyPage'>
        {showHome ? (
        <div className='homePage'>
          <img src='/code-logo.png' alt='code-fun-logo' className='img-logo' height={200} />
          <h2>Please choose code block</h2>
          <div className='codeBlockList'>
                <Link to="/code-block-0">
                  <button onClick={handleClick}> 
                    Naive Case
                  </button>
                </Link>
                <Link to="/code-block-1">
                  <button onClick={handleClick}> 
                    Non-Async Case
                  </button>
                </Link>
                <Link to="/code-block-2">
                  <button onClick={handleClick}> 
                    Async Case
                  </button>
                </Link>
                <Link to="/code-block-3">
                  <button onClick={handleClick}> 
                    Optimal Case
                  </button>
                </Link>
          </div>
          </div>
        ) :
        (
        <Routes>
          <Route path="/code-block-0" element={<CodeBlockPage blockId='0' />} />
          <Route path="/code-block-1" element={<CodeBlockPage blockId='1' />} />
          <Route path="/code-block-2" element={<CodeBlockPage blockId='2' />} />
          <Route path="/code-block-3" element={<CodeBlockPage blockId='3' />} />
        </Routes>
        ) }
        </div>
    </BrowserRouter>
      )
}

export default LobbyPage


