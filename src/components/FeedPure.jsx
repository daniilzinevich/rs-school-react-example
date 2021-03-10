import React from 'react';
import PostPure from './PostPure';

export default class FeedPure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.counter = 0;
  };
  
  render() {
    this.counter++;
    return <div className="FeedPure">
      {this.counter}
      {this.props.posts.map((post, index) => (<PostPure key={index} {...post} />))}
    </div>;
  }
};
