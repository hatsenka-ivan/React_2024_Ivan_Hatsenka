import { useEffect, useState } from "react";
import "./DishGrid.css";
import Button from "../../../components/Button/Button";
import DishCard from "../DishCard/DishCard";
import DishButtonsFilter from "../DishButtonsFilter/DishButtonsFilter";
import useFetch from "../../../customHooks/useFetch";

export default function DishGrid({ handleAddToCart }) {
  const data = useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1");
  const [amountOfDisplayedItems, setAmountOfDisplayedItems] = useState(6);
  const [filterCategory, setFilterCategory] = useState("Dessert");
  const [filteredData, setFilteredData] = useState(null);
  const itemsToDisplay = 6;

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((product) => product.category === filterCategory),
      );
    }
  }, [JSON.stringify(data), filterCategory]);

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
        <DishCard
          key={item.id}
          {...item}
          handleAddToCart={handleAddToCart}
        />
      ));
  }

  return (
    <>
      {filteredData ? (
        <section className="menu__content-wrapper">
          <DishButtonsFilter
            filterCategory={filterCategory}
            handleFilter={handleFilter}
          />
          <section className="menu__content">{showItems()}</section>

          {filteredData.length > amountOfDisplayedItems && (
            <Button primary={true} text="See more" onClick={handleSeeMore} />
          )}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
