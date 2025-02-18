import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header/Header";
import { configureStore } from "@reduxjs/toolkit";
import dishesReducer, {
  addDish,
  updateQuantity,
  removeDish,
} from "../features/dishes/dishesSlice";
import { OrderCard } from "../pages/Order/OrderCard/OrderCard";
import { MemoryRouter } from "react-router-dom";
import { ThemeContext } from "../contexts/theme/ThemeProvider";
import { act } from "react";
import { useAppDispatch } from "../app/hooks";
import { ChosenDish } from "../types/global.types";
import { menuApi } from "../features/menuApi/menuApiSlice";
import { useGetMenuQuery } from "../features/menuApi/menuApiSlice"; // Import the hook

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppDispatch: jest.fn(),
}));

jest.mock("../../features/menuApi/menuApiSlice", () => ({
  ...jest.requireActual("../../features/menuApi/menuApiSlice"),
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
      user: () => ({
        email: "test@example.com",
        isLoggedIn: true,
      }),
      [menuApi.reducerPath]: menuApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(menuApi.middleware),
  });
}

function renderComponents(testStore: any, dish: ChosenDish) {
  return render(
    <MemoryRouter>
      <Provider store={testStore}>
        <ThemeContext.Provider
          value={{ themeColor: "dark", toggleTheme: jest.fn() }}
        >
          <Header />
          <OrderCard chosenDish={dish} />
        </ThemeContext.Provider>
      </Provider>
    </MemoryRouter>,
  );
}

describe("OrderCard and Header Integration", () => {
  let testStore: ReturnType<typeof configureTestStore>;

  beforeEach(() => {
    testStore = configureTestStore();
    mockDispatch.mockClear();
  });

  it("should display the updated quantity in the header cart when quantity changes in OrderCard", () => {
    renderComponents(testStore, chosenDish);
    act(() => {
      testStore.dispatch(addDish(chosenDish));
    });

    // Changing the quantity in the OrderCard
    const input = screen.getByRole("order-card-input");
    fireEvent.change(input, { target: { value: "3" } });
    act(() => {
      testStore.dispatch(
        updateQuantity({ dish: chosenDish, quantity: 3 }),
      );
    });

    // Check if the header cart updates
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should remove the dish from the header cart when removed in OrderCard", () => {
    renderComponents(testStore, chosenDish);

    act(() => {
      testStore.dispatch(addDish(chosenDish));
    });

    // Removing the dish in the OrderCard
    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);
    act(() => {
      testStore.dispatch(removeDish(chosenDish));
    });

    // Check if the header cart updates
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
