import { FaTrophy, FaFire } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

import QuizHeader from "../components/QuizHeader";
import QuizStats from "../components/QuizStats";
import ProgressTracker from "../components/ProgressTracker";
import ScoreBox from "../components/ScoreBox";
import QuizPrompt from "../components/QuizPrompt";
import QuizChoices from "../components/QuizChoices";
import Footer from "../components/Footer";

export default function QuizScreen({
  quizType,
  questionsAmountType,
  progress,
  currentCountry,
  answers,
  onIsPlaying,
  onNextRound,
  score,
  streak,
}) {
  return (
    <div className="app quiz">
      <QuizHeader onClick={onIsPlaying} />
      <div className="play-content-box">
        <QuizStats quizType={quizType}>
          <ProgressTracker progress={progress} />
          <div className="score-boxes">
            <ScoreBox
              icon={<FaTrophy />}
              text={"Score"}
              current={score} // temp
              total={questionsAmountType}
              className={"score"}
            />
            <ScoreBox
              icon={<FaFire />}
              text={"Streak"}
              current={streak} // temp
              className={"streak"}
            />
          </div>
        </QuizStats>

        <QuizPrompt currentCountry={currentCountry} />
        <QuizChoices onNextRound={onNextRound} answers={answers} />
      </div>
      <Footer icon={<FaEarthEurope />} />
    </div>
  );
}
