import React from "react";
import "./FormInputField.css";

export default function FormInputField({
  id,
  type = "text",
  onChange,
  value,
  name,
  text = "",
}: {
  id: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  text?: string;
}) {
  return (
    <label htmlFor={id}>
      <span>{text}</span>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
      />
    </label>
  );
}
