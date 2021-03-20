import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import PostArea from './PostArea';
import { sendPost, fetchPosts } from '../actions/posts';

class Feed extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    this.counter++;
    return <div
      className="Feed"
    >
      <PostArea onSubmit={(author, text) => this.props.dispatch(sendPost(text))}></PostArea>
      <button type="button" onClick={() => this.props.dispatch(fetchPosts())}>Refresh</button>
      {this.props.isFetching ? (<div className="Post"> Loading posts... </div>) :
      this.props.posts.map((post, index) => (<Post key={index} {...post} />))}
    </div>;
  }
};

function mapStateToProps(state) {
  return { posts: state.posts.posts, isFetching: state.posts.isFetching }
}

export default connect(mapStateToProps)(Feed);
