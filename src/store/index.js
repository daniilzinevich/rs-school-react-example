import { createStore, combineReducers } from 'redux'
import PostsReduced from './posts'
import MessagesReducer from './messages'

export default createStore(
  combineReducers({ posts: PostsReduced, messages: MessagesReducer })
  );
