import "./MainDishBlock.css"
import MainButton from "../MainButton/MainButton";
import { Component } from "react";

export default class MainDishBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleQuantity(e) {
    let value = e.target.value.replace(/\D/g, "");
    let quantity = 0;
    quantity = value ? parseInt(value) : quantity;
    this.setState({ quantity });
  }

  handleAddToCart() {
    const products = {
      [this.props.name]: {
        price: this.props.price,
        quantity: this.state.quantity,
      },
    };
    this.props.hadnleAddToCart({
      products: this.state.quantity ? products : {},
    });
  }

  render() {
    return (
      <div className="dish-block">
        <img
          src={this.props.src}
          alt={this.props.name}
          className="dish-block__image"
        />
        <div className="dish-block__item-wrapper">
          <div className="dish-block__item-info">
            <span className="dish-block__name">{this.props.name}</span>
            <span className="dish-block__price">{this.props.price}$</span>
          </div>
          <div className="dish-block__item-description">
            {this.props.info}
          </div>
          <div className="dish-block__item-cart">
            <div className="dish-block__item-count">
              <input
                maxLength="2"
                type="text"
                value={this.state.quantity}
                onChange={this.handleQuantity}
              />
            </div>
            <MainButton
              onClick={this.handleAddToCart}
              primary={true}
              text="Add to cart"
            ></MainButton>
          </div>
        </div>
      </div>
    );
  }
}