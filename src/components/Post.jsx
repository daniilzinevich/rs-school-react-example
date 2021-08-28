import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
  };
  
  shouldComponentUpdate(nextProps) {
    return !(this.props.author === nextProps.author && this.props.message === nextProps.message);
  }

  messageLength() {
    return this.props.message.length
  }
  
  render() {
    this.counter++;
    return <div className="Post">
      <div>{this.props.author}</div>
      <p className="Message">{this.props.message}</p>
      <div className="Counter">length: {this.messageLength()}</div>
      <div className="Counter">{this.counter}</div>
    </div>;
  }
};

export default Post;