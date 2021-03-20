import React from 'react';
import Feed from './components/Feed';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Feed />
        </header>
      </div>
      <Chat />
    </>
  );
}

export default App;
