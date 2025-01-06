import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { navBar } from "../../constants";
import logoImage from "../../assets/logo.svg";
import cartImg from "../../assets/Framecart.svg";
import { useState } from "react";

export default function Header({ dishesQuantity }) {
  return (
    <header className="header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="header__action-wrapper">
        <section className="cart">
          <Link to="/">
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
