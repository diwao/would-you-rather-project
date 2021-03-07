import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseButton from './BaseButton';
class QuestionInput extends Component {
  state = {
    option: null,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      option: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const selectedOption = this.state.option;
    this.props.handleVote(selectedOption);
  };

  render(props) {
    return (
      <article className="flex bg-gray-100 rounded-xl p-4 py-2 mt-4 items-center shadow border">
        <div className="flex items-center">
          <img
            alt="name"
            src={this.props.author.avatarURL}
            className="w-32 h-auto rounded-full mx-auto"
          />
        </div>

        <div className="flex-grow p-2 px-4">
          <h3 className="font-semibold text-purple-600 text-lg">{`Asked by ${this.props.author.name}`}</h3>
          <form onSubmit={this.handleSubmit}>
            <p className="italic mt-2">Would you rather</p>
            <ul>
              <li className="mt-1">
                <input
                  id="optionOne"
                  type="radio"
                  value="optionOne"
                  checked={this.state.option === 'optionOne'}
                  onChange={this.handleChange}
                />
                <label htmlFor="optionOne">
                  {this.props.question.optionOne.text}
                </label>
              </li>
              <li className="mt-1">
                <input
                  id="optionTwo"
                  type="radio"
                  value="optionTwo"
                  checked={this.state.option === 'optionTwo'}
                  onChange={this.handleChange}
                />
                <label htmlFor="optionTwo">
                  {this.props.question.optionTwo.text}
                </label>
              </li>
            </ul>
            <div className="mt-2">
              <BaseButton type="submit" disabled={this.state.option === null}>
                Submit
              </BaseButton>
            </div>
          </form>
        </div>
      </article>
    );
  }
}

export default connect()(QuestionInput);
