import Button from "../../../components/Button/Button";
import "./DishButtonsFilter.css";

export default function DishButtonsFilter({ handleFilter, filterCategory }) {
  function handleFilterButton(index) {
    handleFilter(index);
  }

  return (
    <div className="main__filter-buttons">
      <Button
        primary={filterCategory === "Dessert"}
        text="Dessert"
        onClick={() => handleFilterButton("Dessert")}
      />
      <Button
        primary={filterCategory === "Dinner"}
        text="Dinner"
        onClick={() => handleFilterButton("Dinner")}
      />
      <Button
        primary={filterCategory === "Breakfast"}
        text="Breakfast"
        onClick={() => handleFilterButton("Breakfast")}
      />
    </div>
  );
}
