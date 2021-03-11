import React from 'react';

let counter = 0;
const Post = ({ author, message }) => {
  counter++;
  return <div className="Post">
    <div>{author}</div>
    <p className="Message">{message}</p>
    <div className="Counter">{counter}</div>
  </div>;
};

export default Post;
