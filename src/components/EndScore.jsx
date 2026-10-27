import { QUIZ_SETTINGS } from "../data/quizConfig";
import { FaFire, FaClock, FaCheck, FaFlagCheckered } from "react-icons/fa";

import EndScoreBox from "./EndScoreBox";

export default function EndScore({ correctAnswers, highStreak, speedScore }) {
  const totalPoints = Math.round(
    QUIZ_SETTINGS.scoreValues.correctAnswer * correctAnswers,
  );
  const totalMultiplier = Math.round(
    QUIZ_SETTINGS.scoreValues.streakBonus * correctAnswers,
  );

  const totalScore = Math.round(totalPoints + totalMultiplier + speedScore);

  return (
    <div>
      <EndScoreBox
        icon={<FaCheck />}
        textInput={"Questions correctly answered"}
        textOutput={"Points to add: "}
        className={"score-card-green"}
        valueInput={correctAnswers}
        valueOutput={totalPoints}
      />

      <EndScoreBox
        icon={<FaFire />}
        textInput={"Highest streak"}
        textOutput={"Points to add: "}
        className={"score-card-blue"}
        valueInput={highStreak}
        valueOutput={totalMultiplier}
      />

      <EndScoreBox
        icon={<FaClock />}
        textInput={"Speed bonus"}
        textOutput={"Points to add: "}
        className={"score-card-green"}
        valueOutput={speedScore}
      />
      <EndScoreBox
        icon={<FaFlagCheckered />}
        textOutput={"Total score: "}
        className={"score-card-blue"}
        valueOutput={totalScore}
      />
    </div>
  );
}
