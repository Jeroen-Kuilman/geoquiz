import QuizChoice from "./QuizChoice";

export default function QuizChoices({ onNextRound, answers }) {
  return (
    <div className="choices-content-box">
      <QuizChoice country={answers[0]} onClick={onNextRound} />
      <QuizChoice country={answers[1]} onClick={onNextRound} />
      <QuizChoice country={answers[2]} onClick={onNextRound} />
      <QuizChoice country={answers[3]} onClick={onNextRound} />
    </div>
  );
}
