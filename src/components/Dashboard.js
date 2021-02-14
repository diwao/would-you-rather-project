import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
class Dashboard extends Component {
  state = {
    tab: 'unanswered',
  };

  handleTabChange = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({
      tab: value,
    }));
  };

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div>
          <label htmlFor="unanswered">
            <input
              id="unanswered"
              type="radio"
              value="unanswered"
              checked={this.state.tab === 'unanswered'}
              onChange={this.handleTabChange}
            />
            unanswered
          </label>
          <label htmlFor="answered">
            <input
              id="answered"
              type="radio"
              value="answered"
              checked={this.state.tab === 'answered'}
              onChange={this.handleTabChange}
            />
            answered
          </label>
        </div>
        {this.props.questionIds.map((questionId) => (
          <Question key={questionId} id={questionId} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
