import { call, put, takeEvery } from 'redux-saga/effects'

/*
a -------------->
b ------>
        ^saga   ^saga
*/

const getMessages = async () => {
  const result = await fetch('http://localhost:5000/message/6055eac39752541d49895202');
  return result.json();
}

const fetchMessagesStart = () => ({ type: 'FETCH_MESSAGES_START'});
const fetchMessagesSuccess = (posts) => ({ type: 'FETCH_MESSAGES_SUCESS', payload: posts});
const fetchMessagesFail = () => ({ type: 'FETCH_MESSAGES_FAIL'});

function* fetchMessages(action) {
  try {
    yield put(fetchMessagesStart());
    const data = yield call(getMessages);
    yield put(fetchMessagesSuccess(data));
  } catch(error) {
    yield put(fetchMessagesFail());
  }
}

function* messageSaga() {
  yield takeEvery('FETCH_MESSAGES', fetchMessages);
}

export default messageSaga;
