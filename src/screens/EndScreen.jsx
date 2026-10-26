import { FaTrophy, FaFire } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

import QuizHeader from "../components/QuizHeader";
import QuizStats from "../components/QuizStats";
import ProgressTracker from "../components/ProgressTracker";
import ScoreBox from "../components/ScoreBox";
import Footer from "../components/Footer";
import EndScore from "../components/EndScore";

import { QUIZ_STAGES } from "../data/quizConfig";

export default function EndScreen({
  highStreak,
  correctAnswers,
  quizType,
  progress,
  questionsAmountType,
  quizStage,
  onIsPlaying,
}) {
  return (
    <div className="app quiz screen">
      <QuizHeader quizStage={quizStage} />
      <div className="play-content-box">
        <QuizStats quizType={quizType}>
          <ProgressTracker progress={progress} />
          <div className="score-boxes">
            <ScoreBox
              icon={<FaTrophy />}
              text={"Correct"}
              current={correctAnswers}
              total={questionsAmountType}
              className={"score"}
            />
            <ScoreBox
              icon={<FaFire />}
              text={"Highest streak"}
              current={highStreak}
              className={"streak"}
            />
          </div>
        </QuizStats>

        <div className="endscreen-buttons">
          <button
            className="button active"
            onClick={() => onIsPlaying(QUIZ_STAGES.QuizScreen)}
          >
            Again
          </button>
          <button
            className="button active"
            onClick={() => onIsPlaying(QUIZ_STAGES.StartScreen)}
          >
            Menu
          </button>
        </div>

        <EndScore correctAnswers={correctAnswers} highStreak={highStreak} />
      </div>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}
