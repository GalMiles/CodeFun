import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LobbyPage from './pages/LobbyPage';
import CodeBlockPage from './pages/CodeBlockPage';
import {Toaster} from 'react-hot-toast';

function App() {
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
          <Route path="/" element={<LobbyPage/>}/>
          <Route path="/editor/:codeBlockId" element={<CodeBlockPage/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
