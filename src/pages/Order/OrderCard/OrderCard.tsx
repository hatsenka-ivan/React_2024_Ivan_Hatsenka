import "./OrderCard.css";
import { ChosenDish, MenuType } from "../../../types/global.types";
import DishCount from "../../../components/DishCount/DishCount";
import {
  removeDish,
  updateQuantity,
} from "../../../features/dishes/dishesSlice";
import Button from "../../../components/Button/Button";
import React, { useMemo, useState } from "react";
import { useGetMenuQuery } from "../../../features/menuApi/menuApiSlice";
import { useAppDispatch } from "../../../app/hooks";
import { validateQuantityInput } from "../../../utils/validateQuantityInput";

type OrderCardChildProps = {
  chosenDish: ChosenDish;
};

export function OrderCard({ chosenDish }: OrderCardChildProps) {
  const [quantity, setQuantity] = useState(chosenDish.quantity);
  const { data, error } = useGetMenuQuery();
  const dispatch = useAppDispatch();
  const dish = useMemo(
    () => data!.find((dish) => dish.id === chosenDish.id) as MenuType,
    [data],
  );


  function handleQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const numericValue = validateQuantityInput(e);
    setQuantity(Math.min(99, numericValue));
  }

  function handleRemove(dish: ChosenDish) {
    dispatch(removeDish(dish));
  }

  if (error) {
    return <p>Oops, It seems we have an error</p>;
  }

  return (
    <div className="order__card" key={chosenDish.id}>
      <img src={dish.img} alt={dish.meal} />
      <div className="order__card-tools">
        <p>{dish.meal}</p>
        <span className="blue-link">
          $ {Math.round(dish.price * chosenDish.quantity * 100) / 100}
          USD
        </span>
        <div className="order__card__action-buttons">
          <DishCount
            onBlur={() =>
              dispatch(
                updateQuantity({ dish: chosenDish, quantity: quantity }),
              )
            }
            quantity={quantity}
            onChange={handleQuantity}
          />
          <Button
            text="X"
            onClick={() => handleRemove(chosenDish)}
            primary={true}
          />
        </div>
      </div>
    </div>
  );
}
