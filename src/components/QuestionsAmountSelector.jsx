export default function QuestionsAmountSelector({ children }) {
  return (
    <>
      <div className="question-amount-section">
        <div>
          <h3>Number of questions</h3>
          <p>How many questions do you want?</p>
        </div>
      </div>
      <div className="button-section">{children}</div>
    </>
  );
}
