import React from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';

const Chat = () => {
  const messages = useSelector(state => state.messages)
  return <div className="Chat">
    {messages.map(
      (message, index) => (<Message key={index} {...message} />)
    )}
  </div>;
};

export default Chat;
