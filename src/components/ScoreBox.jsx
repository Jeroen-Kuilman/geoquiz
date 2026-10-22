export default function ScoreBox({ icon, text, current, total, className }) {
  return (
    <div className={`score-box ${className ? className : ""}`}>
      <span>{icon}</span>
      <div className="score-box-text">
        <p>{text}</p>
        <p>
          {current}
          {total ? `/${total}` : ""}
        </p>
      </div>
    </div>
  );
}
