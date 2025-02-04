import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { navBar, navBarUnlogged } from "../../constants";
import logoImage from "../../assets/logo.svg";
import cartImg from "../../assets/Framecart.svg";
import { useContext } from "react";
import { LoginContext } from "../../App";
import { useAppSelector } from "../../app/hooks";


export default function Header() {
  const dishesQuantity = useAppSelector(state => state.dishes.quantity)
  const isLogged = useContext(LoginContext);
  if (!isLogged) {
    return (
      <header className="header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="header__action-wrapper">
        <section>
          <nav className="navbar">
            {navBarUnlogged.map((link) => (
              <NavLink
                key={link}
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                className="navbar__element active"
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </section>
      </div>
    </header>
  )}

  return (
    <header className="header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="header__action-wrapper">
        <section className="cart">
          <Link to="/public">
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
                {link}
              </NavLink>
            ))}
          </nav>
        </section>
      </div>
    </header>
  );
}
