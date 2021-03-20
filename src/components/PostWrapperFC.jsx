import React, {useEffect, useState} from 'react';

export default function usePostWrapper(author) {
  const [name, setName] = useState('Loading');

  useEffect(() => {
    fetch(author).then(response => 
      response.text()
    ).then(name =>
      setName(name)
    );
  }, []);

  return name;
}