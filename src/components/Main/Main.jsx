import "./Main.css"
import MainButton from "../MainButton/MainButton";
import MainBurgerBlock from "../MainBurgerBlock/MainBurgerBlock";
import {burgerData} from "../../constants";

export default function Main() {

    function showToolTip(e) {
        const tool = document.getElementsByClassName("tool-tip")[0];
        tool.style.display = "block";
        tool.style.top = e.offsetTop - 30 + "px";
        tool.style.left = e.offsetLeft - tool.offsetWidth / 2 + e.offsetWidth / 2 + "px"
    }

    function hideToolTip() {
        const tool = document.getElementsByClassName("tool-tip")[0];
        tool.style.display = "none"
    }

    return <main className="main">
        <h1 className="main__title">Browse our menu</h1>
        <div className="main__description">
            <p>
                Use our menu to place an order online, or <span className="link_blue" onMouseOver={(e) => showToolTip(e.currentTarget)} onMouseOut={hideToolTip}>phone</span> our
                store to place a pickup order. Fast and fresh food.
            </p>
            <p className="tool-tip" style={{display: "none"}}>
                Call +1 (977) 569-34-98
            </p>
        </div>
        <div className="main__button-wrapper">
            <MainButton text="Desert"></MainButton>
            <MainButton turnedOff={true} text="Dinner"></MainButton>
            <MainButton turnedOff={true} text="Breakfast"></MainButton>
        </div>
        <section className="main__menu">
            {burgerData.map(({src, name, price}) => (
                <MainBurgerBlock key={name} src={src} name={name} price={price}/>
            ))}
        </section>
        <MainButton text="See more"></MainButton>
    </main>
}

