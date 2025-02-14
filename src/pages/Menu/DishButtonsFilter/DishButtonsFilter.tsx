import Button from "../../../components/Button/Button";
import "./DishButtonsFilter.css";
import { menuCategories } from "../../../constants";

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
      {menuCategories.map((category) => (
        <Button
          key={category}
          primary={filterCategory === category}
          text={category}
          onClick={() => handleFilter(category)}
        />
      ))}
    </div>
  );
}

export default DishButtonsFilter;
