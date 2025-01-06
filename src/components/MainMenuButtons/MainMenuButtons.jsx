import React, { useState } from "react";
import MainButton from "../MainButton/MainButton";
import "./MainMenuButtons.css";

export default function MainMenuButtons({ handleFilter }) {
  const [activeButtonIndex, setactiveButtonIndex] = useState("Dessert");

  function handleFilterButton(index) {
    setactiveButtonIndex(index);
    handleFilter(index);
  }

  return (
    <div className="main__filter-buttons">
      <MainButton
        active={activeButtonIndex === "Dessert"}
        text="Dessert"
        onClick={() => handleFilterButton("Dessert")}
      />
      <MainButton
        active={activeButtonIndex === "Dinner"}
        text="Dinner"
        onClick={() => handleFilterButton("Dinner")}
      />
      <MainButton
        active={activeButtonIndex === "Breakfast"}
        text="Breakfast"
        onClick={() => handleFilterButton("Breakfast")}
      />
    </div>
  );
}
