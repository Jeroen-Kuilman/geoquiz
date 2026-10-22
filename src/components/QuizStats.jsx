import { QUIZ_TYPES } from "../data/quizConfig";

export default function QuizStats({ children, quizType }) {
  const quizConfig = QUIZ_TYPES[quizType];
  const Icon = <quizConfig.icon className="current-icon" />;
  return (
    <div className="quiz-stats-box">
      {children}
      <div className="current-quiz-box">
        <span>{Icon}</span>
        <p>{quizConfig.label}</p>
      </div>
    </div>
  );
}
