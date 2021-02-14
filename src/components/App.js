import React, { Component } from 'react';
import { _getUsers, _getQuestions } from '../utils/_DATA';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <SignIn />
        <Question />
        <LeaderBoard />
        <NewQuestion />
      </div>
    );
  }
}

export default App;
