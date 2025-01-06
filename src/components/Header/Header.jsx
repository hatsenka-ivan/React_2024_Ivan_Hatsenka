import "./Header.css";
import logoImage from "../../assets/logo.svg";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";

export default function Header({ children }) {
  return (
    <header className="header">
      <img src={logoImage} alt="logo" className="logo" />
      <div className="header__action-wrapper">
        {children}
        <section className="sidebar">
          <HeaderNavBar />
        </section>
      </div>
    </header>
  );
}
