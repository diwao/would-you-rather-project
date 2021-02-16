import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log(this.state);
  };

  render(props) {
    return (
      <div>
        <h3>{`Asked by ${this.props.author.name}`}</h3>
        <div>
          <img alt="name" src={this.props.author.avatarURL} />
          <form onSubmit={this.handleSubmit}>
            <p>Would you rather</p>
            <ul>
              <li>
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
              <li>
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(QuestionInput);
