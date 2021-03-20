import { getRandomInt } from '../utils';
import { actions as messageActions } from './messages';

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
  posts,
};

export const actions = {
  createMessage: (dispatch, author, message) => {
    fetch('http://localhost:5000/user')
      .then(result => (result.json()))
      .then(data => console.log(data))
    dispatch(messageActions.createMessage(author, message))
    dispatch(actions.createPost(author, `${author} just texted ${message}`))
  },
  createPost: (author, message) => {
    return { type: 'CREATE_POST', payload: { author, message } }
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
