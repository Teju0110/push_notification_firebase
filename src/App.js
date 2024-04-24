import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { messaging, requestPermission } from './Notification/firebase';
import { onMessage } from 'firebase/messaging';
import { toast, ToastContainer } from 'react-toastify';
import Message from './Components/Message';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    requestPermission();

    onMessage(messaging, (payload) => {
      console.log('Payload', payload);
      toast(<Message notification={payload.notification} />);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
