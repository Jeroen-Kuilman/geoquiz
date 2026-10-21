export default function Button({ children, value, selectedValue, onClick }) {
  return (
    <button
      className={`button ${selectedValue === value ? "active" : ""}`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
