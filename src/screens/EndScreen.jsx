import { FaTrophy } from "react-icons/fa";
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
  speedScore,
  maximumScore,
}) {
  return (
    <div className="app end screen">
      <QuizHeader quizStage={quizStage} />
      <div className="end-content-box">
        <QuizStats quizType={quizType} quizStage={quizStage}>
          <ProgressTracker progress={progress} />
          <div className="score-boxes">
            <ScoreBox
              icon={<FaTrophy />}
              text={"Correct"}
              current={correctAnswers}
              total={questionsAmountType}
              className={"score"}
            />
          </div>
        </QuizStats>

        <EndScore
          correctAnswers={correctAnswers}
          highStreak={highStreak}
          speedScore={speedScore}
          maximumScore={maximumScore}
        />

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
      </div>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}
