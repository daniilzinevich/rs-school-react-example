import React from 'react';

const Message = ({ author, message }) => {
  return <div className="Message">
    <span>{author}</span>
    <span className="Text">{message}</span>
  </div>;
};

export default Message;
