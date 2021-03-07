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
    const { selectedId } = this.state;

    return (
      <div className="text-center pt-10">
        <h1 className="text-6xl">Would you rather</h1>
        <p className="text-xl mt-10">Please Sign in</p>

        <h3 className="text-2xl mt-5">Sign in</h3>
        <form onSubmit={this.handleSubmit} className="mt-2">
          <select onChange={this.handleChange} defaultValue="">
            <option value="" disabled>
              -
            </option>
            {this.props.userIds.map((userId) => (
              <option value={userId} key={userId}>
                {userId}
              </option>
            ))}
          </select>
          <BaseButton type="submit" disabled={selectedId === ''}>
            Sign in
          </BaseButton>
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
