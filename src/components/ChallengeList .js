import React from 'react';

const ChallengeList = ({ challenges, onSelectChallenge }) => {
  return (
    <div className="challenge-list">
      <h2>Desafíos</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index} onClick={() => onSelectChallenge(challenge)}>
            {challenge.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;
