import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoardItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <li>
        <img src={user.avatarURL} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Answers: {Object.keys(user.answers).length}</p>
        <p>Questions: {user.questions.length}</p>
        <p>Score: {Object.keys(user.answers).length + user.questions.length}</p>
      </li>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(LeaderBoardItem);
