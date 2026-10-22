export default function QuizStats({ children, quizType }) {
  return (
    <div className="quiz-stats-box">
      {children}
      <div>{quizType}</div>
    </div>
  );
}
