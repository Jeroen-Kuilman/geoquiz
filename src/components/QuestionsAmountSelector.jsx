export default function QuestionsAmountSelector({ children, amountIcon }) {
  return (
    <section>
      <div className="content-box-text-section">
        <span className="content-icon" aria-hidden="true">
          {amountIcon}
        </span>
        <div>
          <h3>Number of questions</h3>
          <p>How many questions do you want?</p>
        </div>
      </div>
      <div className="button-section">{children}</div>
    </section>
  );
}
