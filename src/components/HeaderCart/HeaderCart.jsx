import PropTypes from 'prop-types';
import "./HeaderCart.css";
import cartImg from "../../assets/Framecart.svg";
import { Component } from "react";

export default class HeaderCart extends Component {
  render() {
    return (
      <div className="cart">
        <a href="/">
          <img src={cartImg} alt="cart image" className="cart__img" />
        </a>
        <div className="cart__item-number">
          <p>
            {this.props.productsQuantity > 99
              ? "99+"
              : this.props.productsQuantity}
          </p>
        </div>
      </div>
    );
  }
}

HeaderCart.propTypes = {
    productsQuantity: PropTypes.number
}

