import React from 'react';
import Feed from './components/Feed';
import Chat from './components/Chat';
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
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const count = 5;
    const members = 3;
    const result = (posts) =>
      ([...posts, ...Array.apply(null, {length: count}).map(
        (_, index) => ({author: Names[index % members], message: Messages[getRandomInt(5)]})
      )]);
    setPosts(oldPosts => result(oldPosts));
    setMessages([
      {
        author: Names[0],
        message: Messages[0],
      },
      {
        author: Names[1],
        message: Messages[1],
      },
      {
        author: Names[0],
        message: Messages[2],
      },
    ])
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Feed posts={posts} />
        </header>
      </div>
      <Chat messages={messages} />
    </>
  );
}

export default App;
