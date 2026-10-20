export default function ContentBox({ children }) {
  return (
    <main className="content-box">
      {children}
      <div className="start-quiz-section">
        <button className="button button-active">▶️Start Quiz</button>
      </div>
    </main>
  );
}
