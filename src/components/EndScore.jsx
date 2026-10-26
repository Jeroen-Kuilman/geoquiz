import { QUIZ_SETTINGS } from "../data/quizConfig";

export default function EndScore({ correctAnswers, highStreak }) {
  const totalPoints = Math.round(
    QUIZ_SETTINGS.scoreValues.correctAnswer * correctAnswers,
  );
  const totalMultiplier = Math.round(
    QUIZ_SETTINGS.scoreValues.streakBonus * correctAnswers,
  );

  const totalScore = Math.round(totalPoints + totalMultiplier);

  return (
    <div>
      <p>
        {correctAnswers} correct answers === {totalPoints} points.
      </p>
      <p>
        {highStreak} highest streak === {totalMultiplier} streak bonus.
      </p>
      <p>
        Your total score is: <strong>{totalScore}</strong>
      </p>
    </div>
  );
}
