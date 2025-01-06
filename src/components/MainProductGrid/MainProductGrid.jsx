import React, { useEffect, useRef, useState } from "react";
import "./MainProductGrid.css";
import MainButton from "../MainButton/MainButton";
import MainDishBlock from "../MainDishBlock/MainDishBlock";
import MainMenuButtons from "../MainMenuButtons/MainMenuButtons";

export default function MainProductGrid({ handleAddToCart, data }) {
  const [amountOfDisplayedItems, setAmountOfDisplayedItems] = useState(6);
  const [filterCategory, setFilterCategory] = useState("Dessert");
  const [filteredData, setFilteredData] = useState(null);
  const seeMoreBtn = useRef();
  const itemsToDisplay = 6;

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((product) => product.category === filterCategory),
      );
    }
  }, [data, filterCategory]);

  function handleFilter(filter) {
    setFilterCategory(filter);
    setAmountOfDisplayedItems(itemsToDisplay);
  }

  function handleSeeMore() {
    setAmountOfDisplayedItems((prev) => prev + itemsToDisplay);
  }

  function showItems() {
    return filteredData
      .slice(0, amountOfDisplayedItems)
      .map((item) => (
        <MainDishBlock
          key={item.id}
          {...item}
          handleAddToCart={handleAddToCart}
        />
      ));
  }

  return (
    <>
      {filteredData ? (
        <section className="dish-wrapper">
          <MainMenuButtons handleFilter={handleFilter} />
          <section className="dish">{showItems()}</section>

          {filteredData.length > amountOfDisplayedItems && (
            <MainButton
              ref={seeMoreBtn}
              active={true}
              text="See more"
              onClick={handleSeeMore}
            />
          )}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
