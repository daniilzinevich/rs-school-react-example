import React from 'react';
import Message from './Message';

const Chat = ({ messages }) => {
  return <div className="Chat">
    {messages.map(
      (message, index) => (<Message key={index} {...message} />)
    )}
  </div>;
};

export default Chat;
