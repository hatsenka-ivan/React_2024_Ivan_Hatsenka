import "./HeaderCart.css"

import cartImg from "../../assets/Framecart.svg"

export default function Cart() {
    return (<div className="cart">
        <a href="#"><img src={cartImg} alt="cart image" className="cart__img"/></a>
        <div className="cart__item-number">
            <p>0</p>
        </div>
    </div>)
}