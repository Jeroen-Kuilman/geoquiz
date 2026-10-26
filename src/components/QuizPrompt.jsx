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
            borderStyle: "solid",
            borderWidth: "1px",
            maxHeight: "9rem",
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
