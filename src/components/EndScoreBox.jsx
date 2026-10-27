export default function EndScoreBox({
  icon,
  textInput,
  textOutput,
  className,
  valueInput,
  valueOutput,
}) {
  return (
    <div className={`endscore-box ${className}`}>
      <span aria-hidden="true">{icon}</span>
      <div className="endscore-box-content">
        <div className="endscore-box-row">
          <p>{textInput}</p>
          <p>{valueInput}</p>
        </div>
        <div className="endscore-box-row">
          <p>{textOutput}</p>
          <p>
            <strong>{valueOutput}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
