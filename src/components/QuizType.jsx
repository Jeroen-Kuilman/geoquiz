export default function QuizType({
  text,
  icon,
  value,
  selectedValue,
  onQuizType,
}) {
  return (
    <div className={`quiz-type-box ${selectedValue === value ? "active" : ""}`}>
      <label className="quiz-type-label">
        <span className={`quiz-icon ${selectedValue == value ? "active" : ""}`}>
          {icon}
        </span>
        <p>{text}</p>
        <input
          className="quiz-checkbox"
          type="radio"
          value={value}
          onChange={(e) => onQuizType(e.target.value)}
          checked={selectedValue === value}
          name="quizType"
        />
      </label>
    </div>
  );
}
