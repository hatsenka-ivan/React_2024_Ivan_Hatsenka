import "./MainDishBlock.css";
import MainButton from "../MainButton/MainButton";
import React, { useState } from "react";

export default function MainDishBlock({
  id,
  img,
  meal,
  price,
  instructions,
  handleAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(e) {
    let value = e.target.value.replace(/\D/g, "");
    let quantity = 0;
    quantity = value ? parseInt(value) : quantity;
    setQuantity(quantity);
  }

  function processAddToCart() {
    if (quantity) {
      const newProducts = {
        [id]: { quantity },
      };
      handleAddToCart({
        newProducts,
      });
    }
  }

  return (
    <div className="dish-block">
      <img src={img} alt={meal} className="dish-block__image" />
      <div className="dish-block__item-wrapper">
        <div className="dish-block__item-info">
          <span className="dish-block__name">{meal}</span>
          <span className="dish-block__price">{price}$</span>
        </div>
        <div className="dish-block__item-description">{instructions}</div>
        <div className="dish-block__item-cart">
          <div className="dish-block__item-count">
            <input
              maxLength="2"
              type="text"
              value={quantity}
              onChange={handleQuantity}
            />
          </div>
          <MainButton
            onClick={processAddToCart}
            active={true}
            text="Add to cart"
          ></MainButton>
        </div>
      </div>
    </div>
  );
}
