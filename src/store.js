import { createStore } from 'redux';
import { getRandomInt } from './utils';

const users = ["Dmitry G", "Anton E", "Eugene S"];
const Messages = [
  "Hello, world",
  "Hello, Dima",
  "Hello everyone!",
  "Can you hear me",
  "Have you seem latest profunctor meme?"
];

const count = 5;
const members = 3;
const posts = Array.apply(null, {length: count}).map(
  (_, index) => ({author: users[index % members], message: Messages[getRandomInt(5)]})
);
const messages = Array.apply(null, {length: count}).map(
  (_, index) => ({author: users[index % members], message: Messages[getRandomInt(5)]})
);

const initialState = {
  users,
  messages,
  posts,
};

export const actions = {
  createMessage: (author, message) => {
    return { type: 'CREATE_MESSAGE', payload: { author, message } }
  },
  createPost: (author, message) => {
    return { type: 'CREATE_POST', payload: { author, message } }
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'CREATE_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);