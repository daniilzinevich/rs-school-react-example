import React, { useCallback, useEffect } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/messages';

const Chat = () => {
  const messages = useSelector(state => state.messages.messages);
  const dispatch = useDispatch();

  const createMessage = useCallback(
    (author, message) => actions.createMessage(dispatch, author, message),
    [dispatch]
  );

  useEffect(() => {
    dispatch({ type: 'FETCH_MESSAGES'});
  }, []);

  return <div
    className="Chat"
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
