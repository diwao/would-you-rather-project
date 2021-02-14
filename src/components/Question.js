import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { authedUser, question, users } = this.props;
    const user = users[question.author];
    return (
      <article>
        <h3>{users.name}</h3>
        <div>
          <div className="thumb">
            <img src={user.avatarURL} alt={user.id} />
          </div>
          <h4>Would you rather</h4>
          <p>{question.optionOne.text}</p>
        </div>
      </article>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question,
    users,
  };
}

export default connect(mapStateToProps)(Question);
