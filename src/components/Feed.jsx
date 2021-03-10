import React from 'react';
import Post from './Post';

export default class Feed extends React.Component {
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
