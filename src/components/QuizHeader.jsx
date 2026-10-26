import { QUIZ_STAGES } from "../data/quizConfig";
import { FaArrowLeft } from "react-icons/fa";
export default function QuizHeader({ onClick }) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-content">
        <FaArrowLeft
          className="header-arrow"
          onClick={() => onClick(QUIZ_STAGES.StartScreen)}
        />
        <h1>
          Geo<span className="title-green quiz">Quiz</span>
        </h1>
      </div>
    </header>
  );
}
