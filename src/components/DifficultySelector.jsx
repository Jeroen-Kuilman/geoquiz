export default function DifficultySelector({ children, difficultyIcon }) {
  return (
    <section>
      <div className="content-box-text-section">
        <span className="content-icon" aria-hidden="true">
          {difficultyIcon}
        </span>
        <div>
          <h3>Difficulty</h3>
          <p> Choose your difficulty</p>
        </div>
      </div>
      <div className="button-section">{children}</div>
    </section>
  );
}
