export default function ContentBox({ children, playIcon }) {
  return (
    <main className="content-box">
      {children}
      <div className="start-quiz-section">
        <button className="button button active">{playIcon} Start Quiz</button>
      </div>
    </main>
  );
}
