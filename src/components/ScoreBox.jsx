export default function ScoreBox({ icon, text, current, total, className }) {
  return (
    <div className={`score-box ${className ? className : ""}`}>
      <span aria-hidden="true">{icon}</span>
      <div className="score-box-text">
        <p>{text}</p>
        <p>
          {current}
          {total ? ` / ${total}` : ""}
        </p>
      </div>
    </div>
  );
}
