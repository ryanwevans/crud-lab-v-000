import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnSubmit(event) {
    event.preventDefault()
    
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        Review:
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
