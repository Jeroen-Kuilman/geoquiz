import { FaTrophy, FaFire } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

import QuizHeader from "../components/QuizHeader";
import QuizStats from "../components/QuizStats";
import ProgressTracker from "../components/ProgressTracker";
import ScoreBox from "../components/ScoreBox";
import QuizPrompt from "../components/QuizPrompt";
import QuizChoices from "../components/QuizChoices";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

export default function QuizScreen({
  quizType,
  questionsAmountType,
  progress,
  currentRound,
  currentCountry,
  answers,
  onIsPlaying,
  onNextRound,
  correctAnswers,
  streak,
  selectedAnswer,
  feedbackStage,
}) {
  return (
    <div className="app quiz screen">
      <QuizHeader onClick={onIsPlaying} />
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
              text={"Streak"}
              current={streak}
              className={"streak"}
            />
          </div>
        </QuizStats>

        <Timer currentRound={currentRound} onNextRound={onNextRound} />

        <QuizPrompt currentCountry={currentCountry} quizType={quizType} />
        <QuizChoices
          onNextRound={onNextRound}
          answers={answers}
          currentCountry={currentCountry}
          selectedAnswer={selectedAnswer}
          feedbackStage={feedbackStage}
        />
      </div>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}
