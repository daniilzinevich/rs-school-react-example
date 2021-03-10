import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  };

  shouldComponentUpdate(nextProps) {
    return !(this.props.author === nextProps.author && this.props.message === nextProps.message);
  }

  render() {
    this.counter++;
    return <div className="Post">
      <div>{this.props.author}</div>
      <p className="Message">{this.props.message}</p>
      <div className="Counter">{this.counter}</div>
    </div>;
  }
};
