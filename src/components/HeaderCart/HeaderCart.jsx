import "./HeaderCart.css";
import cartImg from "../../assets/Framecart.svg";

export default function HeaderCart({ productsQuantity }) {
  return (
    <div className="cart">
      <a href="/">
        <img src={cartImg} alt="cart image" className="cart__img" />
      </a>
      <div className="cart__item-number">
        <p>
          {productsQuantity > 99 
          ? "99+" 
          : productsQuantity}</p>
      </div>
    </div>
  );
}
