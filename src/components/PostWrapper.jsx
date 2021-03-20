import React from 'react';

export default function postWrapper(post) {
  return class PostWrapper extends React.Component {
    constructor() {
      super()
      this.state = {
        name: 'Loading',
      };
    }

    onComponentMount() {
      fetch(this.props.author).then(response => 
        response.text()
      ).then(name =>
        this.setState({name})
      );
    }

    render() {
      const { author, ...rest } = this.props;
      return <div className="PostWrapper">
        <post author={this.state.name} {...rest} />
      </div>;
    }
  };
}