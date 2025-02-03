import { Component } from "react";
import "./MainProductGrid.css";
import MainButton from "../MainButton/MainButton";
import MainDishBlock from "../MainDishBlock/MainDishBlock";
import MainMenuButtons from "../MainMenuButtons/MainMenuButtons";
import axios from "axios";
import fetchData from "../../fetchData";

export default class MainProductGrid extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleSeeMore = this.handleSeeMore.bind(this);
    this.calculateDisplayedItems = this.calculateDisplayedItems.bind(this);
    this.cardRenderer = this.cardRenderer.bind(this);
    this.removeSeeMore = this.removeSeeMore.bind(this);
    this.itemsToDisplay = 6;
    this.state = {
      data: null,
      amountOfDisplayedItems: 6,
      isLoading: true,
      filterCategory: "",
    };
    this.abortController = axios.CancelToken.source();
  }

  cardRenderer(item) {
    return (
      <MainDishBlock
        key={item.id}
        src={item.img}
        name={item.meal}
        price={item.price}
        info={item.instructions}
        hadnleAddToCart={this.props.handleAddToCart}
      />
    );
  }

  calculateDisplayedItems() {
    const filter = this.state.filterCategory;
    return this.state.data
      .filter((product) => (filter === "" ? true : product.category === filter))
      .slice(0, this.state.amountOfDisplayedItems)
      .map(this.cardRenderer);
  }

  removeSeeMore(e) {
    if (this.state.data.length <= this.state.amountOfDisplayedItems) {
      e.target.remove();
    }
  }

  handleSeeMore(e) {
    this.setState(
      (state) => {
        return {
          ...state,
          amountOfDisplayedItems:
            this.state.amountOfDisplayedItems + this.itemsToDisplay,
        };
      },
      () => this.removeSeeMore(e),
    );
    this.calculateDisplayedItems();
  }

  componentDidMount() {
    fetchData.apply(this, this.abortController);
  }

  componentWillUnmount() {
    this.abortController.cancel("Component unmounted");
  }

  render() {
    return (
      <section className="dish-wrapper">
        <MainMenuButtons />
        <section className="dish">
          {this.state.isLoading && <p>Loading...</p>}
          {this.state.data && this.calculateDisplayedItems()}
        </section>
        <MainButton
          primary={true}
          text="See more"
          onClick={this.handleSeeMore}
        />
      </section>
    );
  }
}
