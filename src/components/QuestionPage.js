import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionInput from './QuestionInput';

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <h2>question page.</h2>
        <span>{`answered: ${this.props.answered}`}</span>
        <span>{this.props.author.name}</span>
        <QuestionInput
          question={this.props.question}
          author={this.props.author}
        />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const answered = Object.keys(users[authedUser].answers).includes(id);
  const author = users[questions[id].author];
  console.log(author);
  return {
    answered,
    authedUser,
    question: questions[id],
    author,
  };
}

export default connect(mapStateToProps)(QuestionPage);
