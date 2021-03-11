import React from 'react';
import PostPure from './PostFC';

let counter = 0;
const FeedPure = ({ posts }) => {
  counter++;
  return <div className="FeedPure">
    {counter}
    {posts.map((post, index) => (<PostPure key={index} {...post} />))}
  </div>;
};

export default FeedPure;
