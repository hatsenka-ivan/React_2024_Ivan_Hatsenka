import React, { useState } from "react";
import "./DishCard.css";
import Button from "../../../components/Button/Button";
import type { MenuType } from "../../../types/global.types";
import { useAppDispatch } from "../../../app/hooks";
import { addDish } from "../../../features/dishes/dishesSlice";

type DishCardProps = MenuType;

function DishCard({
  id,
  img,
  meal,
  price,
  instructions,
}: DishCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "");
    const numericValue = value ? parseInt(value) : 0;
    setQuantity(Math.min(99, numericValue)); 
  }

  function processAddToCart() {
    if (quantity > 0) {
      const newDishes = { id, quantity };
      dispatch(addDish(newDishes));
    }
  }

  return (
    <div className="dish-block">
      <img
        src={img}
        alt={meal}
        style={{ display: isImageLoaded ? "inline-block" : "none" }}
        onLoad={() => setIsImageLoaded(true)}
        className="dish-block__image"
      />
      <div className="dish-block__item-wrapper">
        <div className="dish-block__item-info">
          <span className="dish-block__name">{meal}</span>
          <span className="dish-block__price">${price.toFixed(2)}</span>
        </div>
        <div className="dish-block__item-description">{instructions}</div>
        <div className="dish-block__item-cart">
          <div className="dish-block__item-count">
            <input
              maxLength={2}
              type="text"
              value={quantity.toString()}
              onChange={handleQuantity}
            />
          </div>
          <Button
            onClick={processAddToCart}
            primary={true}
            text="Add to cart"
          />
        </div>
      </div>
    </div>
  );
}

export default DishCard;
