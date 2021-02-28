import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    console.log(authedUser);
    return (
      <Router>
        <div className="container mx-auto py-4">
          {authedUser === null ? (
            <SignIn />
          ) : (
            <div>
              <Nav />
              <Route path="/" exact component={Dashboard} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/add" exact component={NewQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
