import "./Header.css"
import logoImage from "../../assets/logo.svg"
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import HeaderCart from "../HeaderCart/HeaderCart";

export default function Header() {
    return <header className="header">
        <img src={logoImage} alt="logo" className="logo"/>
        <div className="header__navbar-wrapper">
            <HeaderNavBar></HeaderNavBar>
            <HeaderCart></HeaderCart>
        </div>
    </header>
}
