import React from 'react';

function isSelected(option, authedUser) {
  return option.votes.includes(authedUser);
}

export default function QuestionResult(props) {
  const { question, author, authedUser } = props;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <div>
      <h3>{`Asked by ${author.name}`}</h3>
      <div>
        <img alt="name" src={author.avatarURL} />
        <h4>Result</h4>
        <ul>
          <li>
            <p>{`Would you rather ${question.optionOne.text}`}</p>
            <span>{`${optionOneVotes}/${totalVotes} ${
              (optionOneVotes / totalVotes) * 100
            }%`}</span>
            <p>{`vote: ${isSelected(question.optionOne, authedUser)}`}</p>
          </li>
          <li>
            <p>{`Would you rather ${question.optionTwo.text}`}</p>
            <span>{`${optionTwoVotes}/${totalVotes} ${
              (optionTwoVotes / totalVotes) * 100
            }%`}</span>
            <p>{`votes: ${isSelected(question.optionTwo, authedUser)}`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
