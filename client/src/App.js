import './App.css';
import LobbyPage from './pages/LobbyPage';
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
      <LobbyPage />
    </div>
  );
}

export default App;
