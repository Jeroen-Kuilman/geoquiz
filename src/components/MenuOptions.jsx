import { QUIZ_STAGES } from "../data/quizConfig";
export default function MenuOptions({
  children,
  playIcon,
  onClick,
  fetchMessage,
  isLoading,
  countries,
}) {
  return (
    <main className="menu-options">
      {children}
      <div className="start-quiz-section">
        {isLoading ? (
          <p>Loading countries...</p>
        ) : fetchMessage ? (
          <p role="alert">{fetchMessage}</p>
        ) : countries.length > 0 ? (
          <button
            className="button active"
            onClick={() => onClick(QUIZ_STAGES.QuizScreen)}
          >
            <span aria-hidden="true">{playIcon}</span> Start Quiz
          </button>
        ) : null}
      </div>
    </main>
  );
}
