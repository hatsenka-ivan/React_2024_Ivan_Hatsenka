import Button from "../../../components/Button/Button";
import "./DishButtonsFilter.css";

type DishButtonsFilterProps = {
  handleFilter: (category: string) => void;
  filterCategory: string;
};

function DishButtonsFilter({
  handleFilter,
  filterCategory,
}: DishButtonsFilterProps) {
  return (
    <div className="main__filter-buttons">
      <Button
        primary={filterCategory === "Dessert"}
        text="Dessert"
        onClick={() => handleFilter("Dessert")}
      />
      <Button
        primary={filterCategory === "Dinner"}
        text="Dinner"
        onClick={() => handleFilter("Dinner")}
      />
      <Button
        primary={filterCategory === "Breakfast"}
        text="Breakfast"
        onClick={() => handleFilter("Breakfast")}
      />
    </div>
  );
}

export default DishButtonsFilter;
