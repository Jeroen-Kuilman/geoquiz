export default function Button({ children, value, selected, onClick }) {
  return (
    <button
      className={`button ${selected === value ? "active" : ""}`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
