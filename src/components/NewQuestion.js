import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { handleInitialData } from '../actions/shared';
import BaseButton from './BaseButton';

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
      <div className="text-center pt-10">
        <h2 className="text-2xl">Create New Quesiton</h2>
        <p className="text-xl mt-10">Complete the question</p>
        <form onSubmit={this.handleSubmit}>
          <span className="block mt-5">Would you rather than...</span>
          <input
            className="block mx-auto mt-2 w-2/3"
            type="text"
            placeholder="Enter option one here"
            value={optionOneText}
            onChange={this.handleOptionOne}
          />
          <span className="block mt-2">Or</span>
          <input
            className="block mx-auto mt-2 w-2/3"
            type="text"
            placeholder="Enter option two here"
            value={optionTwoText}
            onChange={this.handleOptionTwo}
          />
          <div className="mt-5">
            <BaseButton
              type="submit"
              disabled={optionOneText === '' || optionTwoText === ''}
            >
              Sign in
            </BaseButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
