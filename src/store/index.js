import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import PostsReduced from './posts'
import MessagesReducer from './messages'

import messageSaga from '../sagas/message'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ posts: PostsReduced, messages: MessagesReducer }),
  applyMiddleware(thunk, sagaMiddleware),
);

sagaMiddleware.run(messageSaga);
