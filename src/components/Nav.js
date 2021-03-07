import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
  };

  render() {
    const { user } = this.props;
    return (
      <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
        <ul className="flex-grow">
          <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
            <NavLink to="/" exact activeClassName="italic font-bold">
              Home
            </NavLink>
          </li>
          <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
            <NavLink to="/add" activeClassName="italic font-bold">
              New Question
            </NavLink>
          </li>
          <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
            <NavLink to="/leaderboard" activeClassName="italic font-bold">
              Leader Board
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center text-white">
          <p>Hello, {user.name}</p>
          <img
            src={user.avatarURL}
            alt={user.name}
            className="w-10 h-auto rounded-full ml-2"
          />
          <button className="ml-5" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(Nav);
