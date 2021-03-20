import React, { useCallback } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';

const Chat = () => {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();

  const createMessage = useCallback(
    (author, message) => dispatch(actions.createMessage(author, message)),
    [dispatch]
  );

  return <div className="Chat" onClick={() => createMessage('Daniil', 'Lorem Ipsum')}>
    {messages.map(
      (message, index) => (<Message key={index} {...message} />)
    )}
  </div>;
};

export default Chat;
