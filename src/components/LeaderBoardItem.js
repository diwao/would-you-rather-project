import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoardItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <li className="flex bg-gray-100 rounded-xl p-4 py-2 mt-4 items-center shadow border relative leader">
        <div className="flex items-center"></div>
        <img
          src={user.avatarURL}
          alt={user.name}
          className="w-32 h-auto rounded-full mx-auto"
        />
        <div className="flex-grow p-2 px-4">
          <p className="font-semibold text-purple-600 text-l">
            Name: {user.name}
          </p>
          <p>Answers: {Object.keys(user.answers).length}</p>
          <p>Questions: {user.questions.length}</p>
        </div>
        <div className="w-32 border-2	text-center">
          <p className="bg-purple-500 text-white font-bold p-t">SCORE</p>
          <p className="p-2 font-semibold text-purple-600 text-lg">
            {Object.keys(user.answers).length + user.questions.length}
          </p>
        </div>
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
