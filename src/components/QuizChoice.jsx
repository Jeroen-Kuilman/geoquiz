export default function QuizChoice({
  country,
  onClick,
  currentCountry,
  selectedAnswer,
  feedbackStage,
}) {
  let status = "";

  if (feedbackStage) {
    if (country.name === currentCountry.name) {
      status = "correct";
    } else if (country.name === selectedAnswer) {
      status = "wrong";
    }
  }
  return (
    <button
      className={`quiz-choice ${status}`}
      onClick={() => onClick(country.name)}
    >
      <p>{country.name}</p>
    </button>
  );
}
