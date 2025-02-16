import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { navBar } from "../../constants";
import logoImage from "../../assets/logo.svg";
import cartImg from "../../assets/Framecart.svg";
import { useAppSelector } from "../../app/hooks";
import { ThemeContext } from "../../contexts/theme/ThemeProvider";
import { ThemeColorContext } from "../../types/global.types";
import lightThemeIcon from "../../assets/light-theme-icon.svg";
import darkThemeIcon from "../../assets/dark-theme-icon.svg";


export default function Header() {
  const dishesQuantity = useAppSelector((state) => state.dishes.quantity);
  const user = useAppSelector((state) => state.user);
  const { themeColor, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeColorContext;

  function showEmail(link: string) {
    const username = user.email.replace(/@.+/g, "");
    if (link === "Login") {
      return user.isLoggedIn ? username : link;
    }
    return link;
  }

  return (
    <header className="header theme-background">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="header__action-wrapper">
        <section className="cart">
          <Link to="/order">
            <img src={cartImg} alt="cart" className="cart__img" />
          </Link>
          <div className="cart__item-count">
            <p>{dishesQuantity > 99 ? "99+" : dishesQuantity}</p>
          </div>
        </section>
        <section>
          <nav className="navbar">
            {navBar.map((link) => (
              <NavLink
                key={link}
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                className="navbar__element"
              >
                {showEmail(link)}
              </NavLink>
            ))}
          </nav>
        </section>
        <img
          className="theme-toggle"
          onClick={toggleTheme}
          src={themeColor === "dark" ? darkThemeIcon : lightThemeIcon}
          alt={`${themeColor} theme`}
        />
      </div>
    </header>
  );
}
