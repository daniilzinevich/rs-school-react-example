import React from 'react';
import Post from './Post'

const Message = ({ author, message }) => {
  return <div className="Message">
    <Post author={author} message={message} />
    <span>{author}</span>
    <span className="Text">{message}</span>
  </div>;
};

export default Message;
