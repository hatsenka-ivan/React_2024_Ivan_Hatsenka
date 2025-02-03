import "./Button.css";

export default function MainButton({ onClick, text, primary, className }) {
  const classPrimary = primary ? "primary" : "";
  return (
    <button onClick={onClick} className={`main__button ${className} ${classPrimary} `}>
      {text}
    </button>
  );
}