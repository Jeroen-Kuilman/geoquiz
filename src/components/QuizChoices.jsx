import QuizChoice from "./QuizChoice";

export default function QuizChoices({
  onNextRound,
  answers,
  currentCountry,
  selectedAnswer,
  feedbackStage,
}) {
  return (
    <div className="choices-content-box">
      <QuizChoice
        country={answers[0]}
        onClick={onNextRound}
        currentCountry={currentCountry}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
      />
      <QuizChoice
        country={answers[1]}
        onClick={onNextRound}
        currentCountry={currentCountry}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
      />
      <QuizChoice
        country={answers[2]}
        onClick={onNextRound}
        currentCountry={currentCountry}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
      />
      <QuizChoice
        country={answers[3]}
        onClick={onNextRound}
        currentCountry={currentCountry}
        selectedAnswer={selectedAnswer}
        feedbackStage={feedbackStage}
      />
    </div>
  );
}
