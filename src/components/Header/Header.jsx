import PropTypes from 'prop-types';
import "./Header.css"
import logoImage from "../../assets/logo.svg"
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import HeaderCart from "../HeaderCart/HeaderCart";
import { PureComponent } from "react";

export default class Header extends PureComponent {
    render() {
      return (
        <header className="header">
          <img src={logoImage} alt="logo" className="logo" />
          <div className="header__navbar-wrapper">
            <HeaderNavBar />
            <HeaderCart productsQuantity={this.props.productsQuantity} />
          </div>
        </header>
      );
    }
  }
  
Header.propTypes = {
    productsQuantity: PropTypes.number
}