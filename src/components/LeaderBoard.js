import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem';

class LeaderBoard extends Component {
  render() {
    const { userIds } = this.props;
    console.log(userIds);
    return (
      <div>
        <h2>Leader Board</h2>
        <ol>
          {userIds.map((userId) => (
            <LeaderBoardItem key={userId} id={userId} />
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    userIds,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
