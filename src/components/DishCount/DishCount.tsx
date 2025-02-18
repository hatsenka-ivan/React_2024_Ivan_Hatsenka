import React from "react";
import "./DishCount.css";

export default function ProductCount({
  quantity,
  onChange,
  disabled = false,
  onBlur,
}: {
  quantity: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onBlur?: () => void;
}) {
  return (
    <div className="product__count">
      <input
        role="order-card-input"
        onBlur={onBlur}
        maxLength={2}
        type="text"
        value={quantity.toString()}
        onChange={onChange}
        readOnly={disabled}
      />
    </div>
  );
}
