import { useEffect, useState } from "react";
import "./DishGrid.css";
import Button from "../../../components/Button/Button";
import DishCard from "../DishCard/DishCard";
import DishButtonsFilter from "../DishButtonsFilter/DishButtonsFilter";
import useFetch from "../../../customHooks/useFetch";
import type { DataDish, THandleAddToCart } from "../../../types/global.types";

function DishGrid({ handleAddToCart }: THandleAddToCart) {
  const data = useFetch<Array<DataDish>>(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1",
  );
  const [amountOfDisplayedItems, setAmountOfDisplayedItems] =
    useState<number>(6);
  const [filterCategory, setFilterCategory] = useState<string>("Dessert");
  const [filteredData, setFilteredData] = useState<Array<DataDish> | null>(
    null,
  );
  const itemsToDisplay = 6;

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((dish) => dish.category === filterCategory),
      );
    }
  }, [JSON.stringify(data), filterCategory]);

  const handleFilter = (filter: string) => {
    setFilterCategory(filter);
    setAmountOfDisplayedItems(itemsToDisplay);
  };

  const handleSeeMore = () => {
    setAmountOfDisplayedItems((prev) => prev + itemsToDisplay);
  };

  function showItems() {
    return filteredData!
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

export default DishGrid;
