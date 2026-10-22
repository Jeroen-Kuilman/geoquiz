export default function QuizPrompt({ quizCountries, currentCountry }) {
  console.log(quizCountries[currentCountry]);
  return (
    <div className="quiz-prompt-box">
      <p>Which country does this flag belong to?</p>
      <img
        src={quizCountries[currentCountry].flag}
        alt="flag"
        style={{
          width: "15rem",
          borderStyle: "solid",
          borderWidth: "1px",
        }}
      />
    </div>
  );
}
