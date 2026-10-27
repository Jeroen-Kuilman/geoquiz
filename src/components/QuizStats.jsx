import { QUIZ_TYPES, QUIZ_STAGES } from "../data/quizConfig";

export default function QuizStats({ children, quizType, quizStage }) {
  const quizConfig = QUIZ_TYPES[quizType];
  const Icon = <quizConfig.icon className="current-icon" />;
  return (
    <div className="quiz-stats-box">
      {children}

      {quizStage !== QUIZ_STAGES.EndScreen && (
        <div className="current-quiz-box">
          <span>{Icon}</span>
          <p>{quizConfig.label}</p>
        </div>
      )}
    </div>
  );
}
