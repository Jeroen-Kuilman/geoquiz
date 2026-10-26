import { QUIZ_TYPES } from "../data/quizConfig";

export default function QuizPrompt({ currentCountry, quizType }) {
  return (
    <div className="quiz-prompt-box">
      <p>Which country does this {quizType} belong to?</p>
      {quizType === QUIZ_TYPES.flag.value ? (
        <img
          src={currentCountry.flag}
          alt="flag"
          style={{
            maxWidth: "15rem",

            maxHeight: "9rem",
            boxShadow: "0 1px 2px 1px rgba(0, 0, 0, 0.15)",
          }}
        />
      ) : (
        <p
          style={{
            maxWidth: "15rem",
            maxHeight: "9rem",
          }}
        >
          <strong>{currentCountry.capital}</strong>
        </p>
      )}
    </div>
  );
}
