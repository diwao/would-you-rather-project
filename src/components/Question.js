import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
class Question extends Component {
  render() {
    const { question, users, answered, isShow } = this.props;
    const user = users[question.author];
    if (!isShow) {
      return <div></div>;
    }
    return (
      <article className="flex bg-gray-100 rounded-xl p-4 py-2 mt-4 items-center shadow border">
        <div className="flex items-center">
          <img
            src={user.avatarURL}
            alt={user.id}
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <div className="flex-grow p-2 px-4">
          <h3 className="font-semibold text-purple-600 text-lg">{user.name}</h3>
          <h4 className="italic mt-2">Would you rather</h4>
          <p>{question.optionOne.text}...</p>
          <Link to={`/question/${question.id}`}>
            <button className="mt-1 inline-block px-6 py-2 text-xs font-medium purple-6 text-center text-purple-500 uppercase transition bg-transparent border-2 border-purple-500 rounded ripple hover:bg-purple-100 focus:outline-none">
              View Poll
            </button>
          </Link>
        </div>
      </article>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, tab }) {
  const question = questions[id];
  const answered = Object.keys(users[authedUser].answers).includes(id);
  return {
    authedUser,
    question,
    users,
    answered,
    isShow:
      (answered === true && tab === 'answered') ||
      (answered === false && tab === 'unanswered'),
  };
}

export default withRouter(connect(mapStateToProps)(Question));
