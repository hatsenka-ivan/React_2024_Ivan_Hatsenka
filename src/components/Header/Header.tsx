import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { navBar } from "../../constants";
import logoImage from "../../assets/logo.svg";
import cartImg from "../../assets/Framecart.svg";
import { useAppSelector } from "../../app/hooks";


export default function Header() {
  const dishesQuantity = useAppSelector((state) => state.dishes.quantity);
  const user = useAppSelector((state) => state.user);

  function showEmail(link: string) {
    const username = user.email.replace(/@.+/g, "");
    if (link === "Login") {
      return user.isLoggedIn ? username : link;
    }
    return link;
  }

  return (
    <header className="header">
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
      </div>
    </header>
  );
}
