import React from 'react';
import Message from './Message';

export default class Feed extends React.Component {
  render() {
    return <div className="Feed">
      {this.props.messages.map(
        (message, index) => (<Message key={index} {...message} />)
      )}
    </div>;
  }
};
