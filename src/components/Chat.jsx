import React, { useCallback } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/posts';

const Chat = () => {
  const messages = useSelector(state => state.messages.messages);
  const dispatch = useDispatch();

  const createMessage = useCallback(
    (author, message) => actions.createMessage(dispatch, author, message),
    [dispatch]
  );

  return <div
    className="Chat"
    onClick={() => createMessage('Daniil', 'Lorem Ipsum')}
  >
    {messages.map(
      (message, index) => (<Message key={index} {...message} />)
    )}
  </div>;
};

export default Chat;
