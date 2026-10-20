export default function DifficultySelector({ children }) {
  return (
    <>
      <div className="difficulty-section">
        🛠️
        <div>
          <h3>Difficulty</h3>
          <p> Choose your difficulty</p>
        </div>
      </div>
      <div className="button-section">{children}</div>
    </>
  );
}
