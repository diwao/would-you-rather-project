import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import BaseButton from './BaseButton';
class SignIn extends Component {
  state = {
    selectedId: '',
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      selectedId: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const id = this.state.selectedId;
    console.log(id);
    this.props.dispatch(setAuthedUser(id));
  };

  render() {
    return (
      <div>
        <h1>Would you rather</h1>
        <p>Please Sign in</p>

        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option value=""></option>
            {this.props.userIds.map((userId) => (
              <option value={userId} key={userId}>
                {userId}
              </option>
            ))}
          </select>
          <BaseButton type="submit">Sign in</BaseButton>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(SignIn);
