import { getRandomInt } from '../utils';

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
const messages = Array.apply(null, {length: count}).map(
  (_, index) => ({author: users[index % members], message: Messages[getRandomInt(5)]})
);

const initialState = {
  users,
  messages,
  isFetching: false,
};

export const actions = {
  createMessage: (author, message) => {
    return { type: 'CREATE_MESSAGE', payload: { author, message } }
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES_START':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCH_MESSAGES_SUCESS':
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
      }
    case 'FETCH_MESSAGES_FAIL':
      return {
        ...state,
        isFetching: false,
      }
    case 'CREATE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
