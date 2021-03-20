import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  };

  render() {
    this.counter++;
    return <div className="Feed">
      {this.counter}
      {this.props.posts.map((post, index) => (<Post key={index} {...post} />))}
    </div>;
  }
};

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Feed);
