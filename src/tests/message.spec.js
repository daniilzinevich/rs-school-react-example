import { put, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { getMessages } from '../api'
import {
  fetchMessages,
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFail,
} from '../sagas/message';

it('fetches messages correctly', () => {
  return expectSaga(fetchMessages)
    .provide([
      [call(getMessages, '6055ead29752541d49895203'), ['Hello']],
    ])
    .put(fetchMessagesStart())
    .put(fetchMessagesSuccess(['Hello']))
    .run();
})

it('fails on network errors', () => {
  return expectSaga(fetchMessages)
    .put(fetchMessagesStart())
    .put(fetchMessagesFail())
    .run();
});