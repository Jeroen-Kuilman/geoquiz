export default function QuizTypeSelector({ children, quizIcon }) {
  return (
    <section>
      <div className="content-box-text-section">
        <span className="content-icon" aria-hidden="true">
          {quizIcon}
        </span>
        <div>
          <h3>Choose type</h3>
          <p>select your prefered quiz</p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
