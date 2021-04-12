import { call, put, takeEvery } from 'redux-saga/effects'
import { getMessages } from '../api'
/*
a -------------->
b ------>
        ^saga   ^saga
*/

export const fetchMessagesStart = () => ({ type: 'FETCH_MESSAGES_START'});
export const fetchMessagesSuccess = (posts) => ({ type: 'FETCH_MESSAGES_SUCESS', payload: posts});
export const fetchMessagesFail = () => ({ type: 'FETCH_MESSAGES_FAIL'});

export function* fetchMessages(action) {
  try {
    yield put(fetchMessagesStart());
    const data = yield call(getMessages, '6055ead29752541d49895203');
    yield put(fetchMessagesSuccess(data));
  } catch(error) {
    yield put(fetchMessagesFail());
  }
}

function* messageSaga() {
  yield takeEvery('FETCH_MESSAGES', fetchMessages);
}

export default messageSaga;
