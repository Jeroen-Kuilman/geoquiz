export default function QuizChoice({ country, onClick }) {
  return (
    <button className="quiz-choice" onClick={onClick}>
      <p>{country}</p>
    </button>
  );
}
