import { render, screen, fireEvent } from "@testing-library/react";
import DishCard from "../DishCard";
import { Provider } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { store } from "../../../../app/store";
import { addDish } from "../../../../features/dishes/dishesSlice";
import { MenuType } from "../../../../types/global.types";

jest.mock("../../../../app/hooks");

const mockDispatch = jest.fn();
(useAppDispatch as jest.MockedFunction<typeof useAppDispatch>).mockReturnValue(
  mockDispatch,
);

const dish: MenuType = {
  id: "1",
  img: "image-url",
  meal: "Test Meal",
  price: 10.5,
  instructions: "Test instructions",
  category: "Main Course",
  area: "Italian",
};

function renderComponent() {
  render(
    <Provider store={store}>
      <DishCard {...dish} />
    </Provider>,
  );
}

describe("DishCard", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should render product details correctly", () => {
    renderComponent();
    expect(screen.getByText("Test Meal")).toBeInTheDocument();
    expect(screen.getByText("$10.50")).toBeInTheDocument();
    expect(screen.getByText("Test instructions")).toBeInTheDocument();
  });

  it("should display image after it loads", () => {
    renderComponent();
    const img = screen.getByAltText("Test Meal");
    fireEvent.load(img);
    expect(img).toHaveStyle({ display: "inline-block" });
  });
  
  it("should add product to cart", () => {
    renderComponent();
    const button = screen.getByText("Add to cart");
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: addDish.type,
      payload: { id: "1", quantity: 1 },
    });
  });
});
