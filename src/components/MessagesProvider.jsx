import React, { useState, createContext, useContext, useEffect } from 'react'
import { getMessages, putPost } from '../api'
import useSWR from 'swr'

export const MessagesContext = createContext(null);

export const MessagesProvider = ({ userId, children }) => {
  const { data: messages = [], mutate } = useSWR(`http://localhost:5000/message/${userId}`);

  const handleSendMessage = async (newPost) => {
    await putPost(newPost);
    mutate();
  }
  
  return (
    <MessagesContext.Provider value={{ messages, mutate, handleSendMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  const context = useContext(MessagesContext);

  if (!context) {
    throw new Error('useMessages can only be used within an MessagesProvider');
  }

  return context;
};
