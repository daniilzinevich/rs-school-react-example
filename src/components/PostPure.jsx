import React from 'react';

export default class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.counter = 0;
  };

  render() {
    this.counter++;
    return <div className="Post">
      <div>{this.props.author}</div>
      <p className="Message">{this.props.message}</p>
      <div className="Counter">{this.counter}</div>
    </div>;
  }
};
