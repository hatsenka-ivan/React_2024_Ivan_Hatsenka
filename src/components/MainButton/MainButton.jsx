import "./MainButton.css";
import { forwardRef } from "react";

export default forwardRef(function MainButton({ onClick, text, active }, ref) {
  const className = active ? "active" : "";
  return (
    <button ref={ref} onClick={onClick} className={`main__button ${className}`}>
      {text}
    </button>
  );
});
