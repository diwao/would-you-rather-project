import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionInput from './QuestionInput';
import QuestionResult from './QuestionResult';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { handleInitialData } from '../actions/shared';

class QuestionPage extends Component {
  handleVote = (selectedOption) => {
    const { dispatch, question } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        qid: question.id,
        answer: selectedOption,
      })
    ).then(dispatch(handleInitialData()));
  };

  render() {
    return (
      <div>
        {this.props.answered === true ? (
          <QuestionResult
            question={this.props.question}
            author={this.props.author}
            authedUser={this.props.authedUser}
          />
        ) : (
          <QuestionInput
            question={this.props.question}
            author={this.props.author}
            handleVote={this.handleVote}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  //const answered = Object.keys(users[authedUser].answers).includes(id);
  const answered =
    questions[id].optionOne.votes.includes(authedUser) ||
    questions[id].optionTwo.votes.includes(authedUser);
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
