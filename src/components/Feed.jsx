import React from 'react';
import Post from './Post';
import PostArea from './PostArea';


const Names = ["Dmitry G", "Anton E", "Eugene S"];
const Messages = [
  "Hello, world",
  "Hello, Dima",
  "Hello everyone!",
  "Can you hear me",
  "Have you seem latest profunctor meme?"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      posts: []
    };
  };

  componentDidMount() {
    const count = 3 + getRandomInt(3);
    const members = getRandomInt(3);
    const posts = Array.apply(null, {length: count}).map(
        (_, index) => ({author: Names[index % members], message: Messages[getRandomInt(5)]})
      );
    this.setState({ posts });
  }

  render() {
    this.counter++;
    return <div className="Feed">
      <PostArea />
      {this.state.posts.map((post, index) => (<Post key={index} {...post} />))}
    </div>;
  }
};
