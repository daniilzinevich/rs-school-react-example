import React, {useState, useEffect, useCallback} from 'react';

import usePostWrapper from './PostWrapperFC'

const Post = ({ author, message }) => {
  const [read, setRead]  = useState(false);
  const name = usePostWrapper(author);
  const handleRead = useCallback(() => {
    setRead(true);
  },
  [read]);
  
  useEffect(
    () => {
      console.log('this happens once');
      return () => {
        console.log('this also happens once');
      }
    },
    []
  )
  console.log('render');

  return <div className="Post">
    <div>{name}</div>
    <p className="Message">{message}</p>
    {!read && <button onClick={handleRead}>Mark as read</button>}
  </div>;
};

export default Post;
