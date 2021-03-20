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
    <input className="Input" type="text" placeholder="Type message here"
      onKeyPress={(event) => {
        if (event.charCode===13) {
          createMessage('Daniil', event.target.value);
          event.target.value = '';
        }
      }}
    />
  </div>;
};

export default Chat;
