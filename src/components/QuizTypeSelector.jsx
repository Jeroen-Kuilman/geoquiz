export default function QuizTypeSelector({ children }) {
  return (
    <>
      <div className="question-type-section">
        🌄
        <div>
          <h3>Choose type</h3>
          <p>select your prefered quiz</p>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
