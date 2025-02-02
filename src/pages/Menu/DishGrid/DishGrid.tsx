import { useEffect, useState } from "react";
import "./DishGrid.css";
import Button from "../../../components/Button/Button";
import DishCard from "../DishCard/DishCard";
import DishButtonsFilter from "../DishButtonsFilter/DishButtonsFilter";
import { useGetMenuQuery } from "../../../features/menuApi/menuApiSlice";
import { MenuType } from "../../../types/global.types";

function DishGrid() {
  const { data, error } = useGetMenuQuery();
  const [amountOfDisplayedItems, setAmountOfDisplayedItems] =
    useState<number>(6);
  const [filterCategory, setFilterCategory] = useState<string>("Dessert");
  const [filteredData, setFilteredData] = useState<Array<MenuType> | null>(
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
    if (filteredData){
      return filteredData
        .slice(0, amountOfDisplayedItems)
        .map((item) => <DishCard key={item.id} {...item} />);
    }
    return null;
  }

  if (error) {
    return <p>We encountered an error</p>;
  }

  return (
    <>
      <section className="menu__content-wrapper">
        <DishButtonsFilter
          filterCategory={filterCategory}
          handleFilter={handleFilter}
        />
        <section className="menu__content">{showItems()}</section>
        {filteredData && filteredData.length > amountOfDisplayedItems && (
          <Button primary={true} text="See more" onClick={handleSeeMore} />
          )}
        </section>
    </>
  );
}

export default DishGrid;
