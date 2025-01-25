import React from "react";
import "./Button.css";

type ButtonProps = {
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  text: string;
  primary?: boolean;
  className?: string;
};

function Button({ onClick, text, primary = false, className }: ButtonProps) {
  const classPrimary = primary ? "primary" : "";
  return (
    <button onClick={onClick} className={`main__button ${className} ${classPrimary}`}>
      {text}
    </button>
  );
}

export default Button;
