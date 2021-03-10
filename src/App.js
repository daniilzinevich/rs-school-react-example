import React from 'react';
import Feed from './components/Feed';
import FeedPure from './components/FeedPure';
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Names = ["Dmitry G", "Anton E", "Eugene S"];
const Messages = [
  "Hello, world",
  "Hello, Dima",
  "Hello everyone!",
  "Can you hear me",
  "Have you seem latest profunctor meme?"
];

function App() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    setInterval(() => {
      const count = 3 + getRandomInt(13);
      const members = getRandomInt(3);
      const result = () =>
        (Array.apply(null, {length: count}).map(
          (_, index) => ({author: Names[index % members], message: Messages[getRandomInt(5)]})
        ));
      setPosts(result());
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Feed posts={posts} />
        <FeedPure posts={posts} />
      </header>
    </div>
  );
}

export default App;
