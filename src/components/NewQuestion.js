import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { handleInitialData } from '../actions/shared';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleOptionOne = (e) => {
    const optionOneText = e.target.value;
    this.setState({
      optionOneText,
    });
  };

  handleOptionTwo = (e) => {
    const optionTwoText = e.target.value;
    this.setState({
      optionTwoText,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    dispatch(handleSaveQuestion({ optionOneText, optionTwoText }))
      .then(dispatch(handleInitialData()))
      .then(() => {
        this.props.history.push(`/`);
      });
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
    }));
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <div>
        <h2>Create New Quesiton</h2>
        <p>Complete the question</p>
        <form onSubmit={this.handleSubmit}>
          <span>Would you rather than...</span>
          <input
            type="text"
            placeholder="Enter option one here"
            value={optionOneText}
            onChange={this.handleOptionOne}
          />
          <span>Or</span>
          <input
            type="text"
            placeholder="Enter option two here"
            value={optionTwoText}
            onChange={this.handleOptionTwo}
          />
          <button
            type="submit"
            disabled={optionOneText === '' || optionTwoText === ''}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
