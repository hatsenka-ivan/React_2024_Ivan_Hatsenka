import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { OrderCard } from "../OrderCard";
import { MemoryRouter } from "react-router-dom";
import {
  removeDish,
  updateQuantity,
} from "../../../../features/dishes/dishesSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { ChosenDish } from "../../../../types/global.types";
import { ThemeContext } from "../../../../contexts/theme/ThemeProvider";
import {
  menuApi,
  useGetMenuQuery,
} from "../../../../features/menuApi/menuApiSlice";
import dishesReducer from "../../../../features/dishes/dishesSlice";

jest.mock("../../../../app/hooks", () => ({
  ...jest.requireActual("../../../../app/hooks"),
  useAppDispatch: jest.fn(),
}));

jest.mock("../../../../features/menuApi/menuApiSlice", () => ({
  ...jest.requireActual("../../../../features/menuApi/menuApiSlice"),
  useGetMenuQuery: jest.fn(),
}));

const mockDispatch = jest.fn();
(useAppDispatch as jest.MockedFunction<typeof useAppDispatch>).mockReturnValue(
  mockDispatch,
);

const mockMenuData = [
  {
    id: "1",
    meal: "Test Meal",
    img: "test-image-url",
    price: 10,
  },
];

(useGetMenuQuery as jest.Mock).mockReturnValue({
  data: mockMenuData,
  error: null,
  isLoading: false,
});

const chosenDish: ChosenDish = {
  id: "1",
  quantity: 1,
};

function configureTestStore() {
  return configureStore({
    reducer: {
      dishes: dishesReducer,
      [menuApi.reducerPath]: menuApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(menuApi.middleware),
  });
}

function renderComponent(dish: ChosenDish) {
  const testStore = configureTestStore();
  return render(
    <MemoryRouter>
      <Provider store={testStore}>
        <ThemeContext.Provider
          value={{ themeColor: "dark", toggleTheme: jest.fn() }}
        >
          <OrderCard chosenDish={dish} />
        </ThemeContext.Provider>
      </Provider>
    </MemoryRouter>,
  );
}

describe("OrderCard Component", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should render the order card with product details", () => {
    renderComponent(chosenDish);

    expect(screen.getByAltText("Test Meal")).toBeInTheDocument();
    expect(screen.getByText("Test Meal")).toBeInTheDocument();
    expect(screen.getByText("$ 10USD")).toBeInTheDocument();
  });

  it("should update the quantity when changed", () => {
    renderComponent(chosenDish);

    const input = screen.getByRole("order-card-input");
    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.blur(input);

    expect(mockDispatch).toHaveBeenCalledWith(
      updateQuantity({ dish: chosenDish, quantity: 3 }),
    );
  });

  it("should remove the product when remove button is clicked", () => {
    renderComponent(chosenDish);

    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);

    expect(mockDispatch).toHaveBeenCalledWith(removeDish(chosenDish));
  });
});
