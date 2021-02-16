import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    console.log(authedUser);
    return (
      <div>
        {authedUser === null ? (
          <SignIn />
        ) : (
          <div>
            <Dashboard />
            <QuestionPage id="xj352vofupe1dqz9emx13r" />
            <LeaderBoard />
            <NewQuestion />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
