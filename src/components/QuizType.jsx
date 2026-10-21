export default function QuizType({ text, icon, value, selected, onChange }) {
  return (
    <div className={`quiz-type-box ${selected === value ? "active" : ""}`}>
      <label className="quiz-type-label">
        <span
          className={`quiz-icon ${selected == value ? "active" : ""}`}
          aria-hidden="true"
        >
          {icon}
        </span>
        <p>{text}</p>
        <input
          className="quiz-checkbox"
          type="radio"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          checked={selected === value}
          name="quizType"
        />
      </label>
    </div>
  );
}
