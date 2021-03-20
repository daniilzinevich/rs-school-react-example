import React from 'react';
import Feed from './components/Feed';
import FeedPure from './components/FeedFC';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Feed />
        {/* <Messages messages={messages} /> */}
      </header>
    </div>
  );
}

export default App;
