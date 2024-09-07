import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useCreateChatClient } from 'stream-chat-react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './navigation-routes/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
