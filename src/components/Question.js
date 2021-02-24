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
      <article>
        <h3>{users.name}</h3>
        <div>
          <div className="thumb">
            <img src={user.avatarURL} alt={user.id} />
          </div>
          <h4>Would you rather</h4>
          <p>{question.optionOne.text}</p>
          <Link to={`/question/${question.id}`}>
            <button>View Poll</button>
          </Link>
          <p>{`answer: ${answered}`}</p>
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
