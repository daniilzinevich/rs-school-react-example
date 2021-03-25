import { getPosts, putPost } from '../api';

export const fetchPosts = () =>
  (dispatch) => {
    dispatch(fetchPostsStart());
    getPosts('6055ead29752541d49895203')
      .then(data => {
        dispatch(fetchPostsSuccess(data.reverse()));
      })
      .catch(error => {
        dispatch(fetchPostsFail());
      })
  };
const fetchPostsStart = () => ({ type: 'FETCH_POSTS_START'});
const fetchPostsSuccess = (posts) => ({ type: 'FETCH_POSTS_SUCESS', payload: posts});
const fetchPostsFail = () => ({ type: 'FETCH_POSTS_FAIL'});

export const sendPost = (text) =>
  (dispatch) => {
    dispatch(sendPostStart())
    putPost('6055ead29752541d49895203', text)
      .then(data => {
        dispatch(sendPostSuccess(data.author._id, data.message));
      })
      .catch(error => {
        dispatch(sendPostFail());
      })
  };
const sendPostStart = () => ({ type: 'SEND_POST_START'});
const sendPostSuccess = (author, message) => ({ type: 'SEND_POST_SUCESS', payload: { author, message } });
const sendPostFail = () => ({ type: 'SEND_POST_FAIL'});

