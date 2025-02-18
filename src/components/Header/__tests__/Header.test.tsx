import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { ThemeContext } from "../../../contexts/theme/ThemeProvider";
import { MemoryRouter } from "react-router-dom";

function renderHeader() {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ThemeContext.Provider
          value={{ themeColor: "dark", toggleTheme: jest.fn() }}
        >
          <Header />
        </ThemeContext.Provider>
      </Provider>
    </MemoryRouter>,
  );
}

describe("Header", () => {
  it("should render the cart", () => {
    renderHeader();
    expect(screen.getByAltText("cart")).toBeInTheDocument();
  });

  it("should render amount", () => {
    renderHeader();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
