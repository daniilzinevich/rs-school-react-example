export const fetchPosts = () =>
  (dispatch) => {
    dispatch(fetchPostsStart())
    fetch('http://localhost:5000/post/6055eac39752541d49895202')
      .then(result => (result.json()))
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
    fetch(
      'http://localhost:5000/post/6055eac39752541d49895202',
      {
        method: 'PUT',
        body: JSON.stringify({ message: text }),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )
      .then(result => (result.json()))
      .then(data => {
        dispatch(createPost(data.author._id, data.message));
      })
      .catch(error => {
        dispatch(sendPostFail());
      })
  };
const sendPostStart = () => ({ type: 'SEND_POST_START'});
const sendPostSuccess = (posts) => ({ type: 'SEND_POST_SUCESS', payload: posts});
const sendPostFail = () => ({ type: 'SEND_POST_FAIL'});

const createPost = (author, message) => ({ type: 'CREATE_POST', payload: { author, message } });
