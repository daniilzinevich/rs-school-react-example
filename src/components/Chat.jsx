import React, { useCallback, useEffect } from 'react';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/messages';
import { useMessages } from './MessagesProvider';
import useSWR from 'swr'

const Chat = () => {
  const { messages, mutate } = useMessages();

  return <div
    className="Chat"
  >
    {messages.map(
      (message, index) => (<Message key={index} {...message} />)
    )}
    <input className="Input" type="text" placeholder="Type message here"
      onKeyPress={(event) => {
        if (event.charCode===13) {
          event.target.value = '';
          mutate();
        }
      }}
    />
  </div>;
};

export default Chat;
