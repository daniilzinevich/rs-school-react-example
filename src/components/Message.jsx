import React from 'react';
import PostWrapper from './PostWrapper';

class Post extends React.Component {
  render() {
    return <div className="Post">
      <div>{this.props.author}</div>
      <p className="Message">{this.props.message}</p>
    </div>;
  }
};

export default provide(PostWrapper(MessageWraper(Post)));