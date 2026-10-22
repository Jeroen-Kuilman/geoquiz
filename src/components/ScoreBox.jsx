export default function ScoreBox({ icon, text, current, total, className }) {
  return (
    <div className={`score-box ${className ? className : ""}`}>
      <span>{icon}</span>
      <div className="score-box-text">
        <p>{text}</p>
        <div>
          {current}
          {total ? `/${total}` : ""}
        </div>
      </div>
    </div>
  );
}
