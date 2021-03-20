import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import { actions } from '../store';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  };

  render() {
    this.counter++;
    return <div
      className="Feed"
      onClick={() => this.props.createPost('Daniil', 'Lorem Ipsum')}
    >
      {this.counter}
      {this.props.posts.map((post, index) => (<Post key={index} {...post} />))}
    </div>;
  }
};

function mapStateToProps(state) {
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (author, message) =>
      dispatch(actions.createPost(author, message)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
