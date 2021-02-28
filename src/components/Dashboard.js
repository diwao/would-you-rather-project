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
        <div className="mt-2">
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
          <label htmlFor="answered" className="ml-4">
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
          <Question key={questionId} id={questionId} tab={this.state.tab} />
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
