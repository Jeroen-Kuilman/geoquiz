import { QUIZ_SETTINGS } from "../data/quizConfig";
import { FaFire, FaClock, FaCheck, FaFlagCheckered } from "react-icons/fa";

import EndScoreBox from "./EndScoreBox";

export default function EndScore({
  correctAnswers,
  highStreak,
  speedScore,
  maximumScore,
}) {
  const totalPoints = Math.round(
    QUIZ_SETTINGS.scoreValues.correctAnswer * correctAnswers,
  );
  const totalMultiplier = Math.round(
    QUIZ_SETTINGS.scoreValues.streakBonus * highStreak,
  );

  const totalScore = Math.round(totalPoints + totalMultiplier + speedScore);

  return (
    <div>
      <EndScoreBox
        icon={<FaCheck />}
        textInput={"Questions correctly answered"}
        textOutput={"Points to add"}
        className={"score-card-green"}
        valueInput={correctAnswers}
        valueOutput={totalPoints}
      />

      <EndScoreBox
        icon={<FaFire />}
        textInput={"Highest streak"}
        textOutput={"Points to add"}
        className={"score-card-blue"}
        valueInput={highStreak}
        valueOutput={totalMultiplier}
      />

      <EndScoreBox
        icon={<FaClock />}
        textInput={"Speed bonus"}
        textOutput={"Points to add"}
        className={"score-card-green"}
        valueOutput={speedScore}
      />
      <EndScoreBox
        icon={<FaFlagCheckered />}
        textInput={"Maximum achievable score"}
        textOutput={"Your final score"}
        className={"score-card-blue"}
        valueInput={maximumScore}
        valueOutput={totalScore}
      />
    </div>
  );
}
