import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {authedUser !== null ? (
          <SignIn />
        ) : (
          <div>
            <Dashboard />
            <Question />
            <LeaderBoard />
            <NewQuestion />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(App);
