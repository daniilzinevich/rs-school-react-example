import React from 'react';
import Feed from './components/Feed';
import FeedPure from './components/FeedFC';
import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// const Names = ["Dmitry G", "Anton E", "Eugene S"];
const Names = ["/users/dmitry_g", "/users/anton_e", "/users/eugene_s"];
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
    // setInterval(() => {
      const count = getRandomInt(3);
      const members = getRandomInt(3);
      const result = (posts) =>
        ([...posts, ...Array.apply(null, {length: count}).map(
          (_, index) => ({author: Names[index % members], message: Messages[getRandomInt(5)]})
        )]);
      setPosts(oldPosts => result(oldPosts));
    // }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <FeedPure posts={posts} />
        {/* <Messages messages={messages} /> */}
      </header>
    </div>
  );
}

export default App;
