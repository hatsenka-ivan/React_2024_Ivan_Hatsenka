import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header/Header";
import { MenuType } from "../types/global.types";
import { configureStore } from "@reduxjs/toolkit";
import dishesReducer, {
  addDish,
} from "../features/dishes/dishesSlice"; 
import DishCard from "../pages/Menu/DishCard/DishCard";
import { MemoryRouter } from "react-router-dom";
import { ThemeContext } from "../contexts/theme/ThemeProvider";
import { act } from "react";
import { useAppDispatch } from "../app/hooks";

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppDispatch: jest.fn(),
}));

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

function configureTestStore() {
  return configureStore({ 
    reducer: 
      { user: () => ({
        email: "test@example.com",
        isLoggedIn: true,
      }),
      dishes: dishesReducer } 
  });
}

function renderComponents(testStore: any) {
  return render(
    <MemoryRouter>
      <Provider store={testStore}>
        <ThemeContext.Provider
          value={{ themeColor: "dark", toggleTheme: jest.fn() }}
        >
          <Header />
          <DishCard {...dish} />
        </ThemeContext.Provider>
      </Provider>
    </MemoryRouter>,
  );
}

describe("DishCard and Header Integration", () => {
  let testStore: ReturnType<typeof configureTestStore>;

  beforeEach(() => {
    testStore = configureTestStore();
    mockDispatch.mockClear();
  });

  it("should display the added dish in the header cart", () => {
    renderComponents(testStore);

    // Add a dish to the cart
    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);
    act(() => {
      testStore.dispatch(addDish({ id: "1", quantity: 1 }));
    });

    // Check if the header cart updates
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should display several dishes in the header cart", () => {
    renderComponents(testStore);

    // Change the quantity and adding to cart
    const addButton = screen.getByText("Add to cart");
    const input = screen.getByDisplayValue("1");
    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(addButton);
    act(() => {
      testStore.dispatch(addDish({ id: "1", quantity: 10 }));
    });

    // Check if the header cart updates
    expect(screen.getByText("10")).toBeInTheDocument();
  }); 
});
