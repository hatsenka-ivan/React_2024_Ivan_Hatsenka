import PropTypes from 'prop-types';
import "./MainBurgerBlock.css"
import MainButton from "../MainButton/MainButton";

export default function BurgerBlock({src, name, price}) {
    return <div className="burger-block">
        <img src={src} alt={name} className="burger-block__image"/>
        <div className="burger-block__item-wrapper">
            <div className="burger-block__item-info">
                <span className="burger-block__name">{name}</span>
                <span className="burger-block__price">{price}</span>
            </div>
            <div className="burger-block__item-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="burger-block__item-cart">
                <div className="burger-block__item-count">
                    1
                </div>
                <MainButton text="Add to cart"></MainButton>
            </div>
        </div>
    </div>
}

BurgerBlock.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired, 
};