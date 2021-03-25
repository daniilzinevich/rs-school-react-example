import React from 'react';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  };

  render() {
    const handleSubmit = () => {
      this.props.onSubmit('Daniil', this.state.text);
      this.setState({text: ''});
    }

    return <div className="Submit">
      <textarea rows="3" onInput={event => this.setState({text: event.target.value})} />
      <button type="button" onClick={handleSubmit}>Send</button>
    </div>;
  }
};
    
    
