import QuizChoice from "./QuizChoice";

export default function QuizChoices({ onCurrentRound }) {
  return (
    <div className="choices-content-box">
      <QuizChoice country={"Netherlands"} onClick={onCurrentRound} />
      <QuizChoice country={"Canada"} onClick={onCurrentRound} />
      <QuizChoice country={"United States"} onClick={onCurrentRound} />
      <QuizChoice country={"Poland"} onClick={onCurrentRound} />
    </div>
  );
}
