import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const scoredPercentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (scoredPercentage === 100) emoji = "🎖️";
  if (scoredPercentage >= 80 && scoredPercentage < 100) emoji = "🍕";
  if (scoredPercentage >= 50 && scoredPercentage < 80) emoji = "🙂";
  if (scoredPercentage >= 0 && scoredPercentage < 50) emoji = "😟";
  if (scoredPercentage === 0) emoji = "😭";
  return (
    <>
      <p className="result">
        <span> {emoji} </span> You Scored {points} out of {maxPossiblePoints} (
        {Math.ceil(scoredPercentage)}% )
      </p>
      <p className="highscore">(highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
