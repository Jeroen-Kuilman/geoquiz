export default function QuizChoice({ country, onClick }) {
  return (
    <button className="quiz-choice" onClick={() => onClick(country.name)}>
      <p>{country.name}</p>
    </button>
  );
}
