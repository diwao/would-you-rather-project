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
    <article className="flex bg-gray-100 rounded-xl p-4 py-2 mt-4 items-center shadow border">
      <div className="flex items-center">
        <img
          alt="name"
          src={author.avatarURL}
          className="w-32 h-auto rounded-full mx-auto"
        />
      </div>
      <div className="flex-grow p-2 px-4">
        <h3 className="font-semibold text-purple-600 text-lg">{`Asked by ${author.name}`}</h3>
        <h4 className="font-semibold mt-2">Results:</h4>
        <ul>
          <li className="border border-purple-300 p-2">
            <label htmlFor="resultOne" className="block">
              {`Would you rather ${question.optionOne.text}`}
              <spam
                className={`bg-purple-500 text-white px-1 ml-1 ${
                  isSelected(question.optionOne, authedUser)
                    ? 'inline-block'
                    : 'hide'
                }`}
              >
                Your Vote
              </spam>
            </label>
            <div className="mt-1">
              <progress
                id="resultOne"
                max="100"
                value={Math.round((optionOneVotes / totalVotes) * 100)}
              >{`${Math.round(
                (optionOneVotes / totalVotes) * 100
              )}%`}</progress>
              <span>{`${Math.round(
                (optionOneVotes / totalVotes) * 100
              )}%`}</span>
            </div>
            <span className="block">{`${optionOneVotes} out of ${totalVotes} votes`}</span>
          </li>
          <li className="border border-purple-300 p-2 mt-2">
            <label htmlFor="resultTwo" className="block">
              {`Would you rather ${question.optionTwo.text}`}
              <spam
                className={`bg-purple-500 text-white px-1 ml-1 ${
                  isSelected(question.optionTwo, authedUser)
                    ? 'inline-block'
                    : 'hide'
                }`}
              >
                Your Vote
              </spam>
            </label>
            <div className="mt-1">
              <progress
                id="resultTwo"
                max="100"
                value={Math.round((optionTwoVotes / totalVotes) * 100)}
              >{`${Math.round(
                (optionTwoVotes / totalVotes) * 100
              )}%`}</progress>
              <span>{`${Math.round(
                (optionTwoVotes / totalVotes) * 100
              )}%`}</span>
            </div>
            <span className="block">{`${optionOneVotes} out of ${totalVotes} votes`}</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
