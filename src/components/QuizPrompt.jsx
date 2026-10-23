export default function QuizPrompt({ currentCountry }) {
  return (
    <div className="quiz-prompt-box">
      <p>Which country does this flag belong to?</p>
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
    </div>
  );
}
