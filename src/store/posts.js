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
const posts = Array.apply(null, {length: count}).map(
  (_, index) => ({author: users[index % members], message: Messages[getRandomInt(5)]})
);

const initialState = {
  users,
  isFetching: false,
  isSending: false,
  posts,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_START':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCH_POSTS_FAIL':
      return {
        ...state,
        isFetching: false,
      }
    case 'FETCH_POSTS_SUCESS':
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
      }
    case 'CREATE_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    default:
      return state;
  }
};

export default reducer;
