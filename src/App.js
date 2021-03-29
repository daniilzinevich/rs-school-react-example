import React from 'react';
import Feed from './components/Feed';
import Chat from './components/Chat';
import { MessagesProvider } from './components/MessagesProvider';
import './App.css';

function App() {
  return (
    <>
    <MessagesProvider userId="6055ead29752541d49895203">
      <div className="App">
        <header className="App-header">
          <Feed />
        </header>
      </div>
        <Chat />
      </MessagesProvider>
    </>
  );
}

export default App;
