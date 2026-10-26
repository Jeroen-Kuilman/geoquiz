import { QUIZ_STAGES } from "../data/quizConfig";
export default function MenuOptions({ children, playIcon, onClick }) {
  return (
    <main className="menu-options">
      {children}
      <div className="start-quiz-section">
        <button
          className="button active"
          onClick={() => onClick(QUIZ_STAGES.QuizScreen)}
        >
          <span aria-hidden="true">{playIcon}</span> Start Quiz
        </button>
      </div>
    </main>
  );
}
