import "./Order.css";
import { useAppSelector } from "../../../app/hooks";
import Button from "../../../components/Button/Button";
import FormInputField from "../../../components/FormInputField/FormInputField";
import React, { useState } from "react";
import { OrderCard } from "../OrderCard/OrderCard";

export default function Order() {
  const dishes = useAppSelector((state) => state.dishes.Dishes);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  function handleOrder(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setHouse("");
    setStreet("");
  }

  return (
    <article className="order__content-wrapper">
      <h2 className="main__heading">Finish your order</h2>
      {dishes.length ? (
        <>
          <section className="order__content">
            {dishes.map((dish) => (
              <OrderCard key={dish.id} chosenDish={dish} />
            ))}
          </section>
          <form className="order__address-form">
            <FormInputField
              id="address-street"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              name="address-street"
              text="Street"
            />
            <FormInputField
              id="address-house"
              onChange={(e) => setHouse(e.target.value)}
              value={house}
              name="address-house"
              text="House"
              type="tel"
            />
            <Button text="Order" primary={true} onClick={handleOrder} />
          </form>
        </>
      ) : (
        <p className="empty-cart">Nothing but bugs here.</p>
      )}
    </article>
  );
}
