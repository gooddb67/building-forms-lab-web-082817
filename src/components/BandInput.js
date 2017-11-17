import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ''
  }

  handleChange(event) {
  this.setState({
    text: event.target.value
  });
}

handleSubmit(event){
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_BAND',
    band: this.state.text  
  })
}

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="submit" />
        </form>

      </div>
    );
  }
};

export default BandInput;
