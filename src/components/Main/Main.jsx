import "./Main.css"
import { PureComponent } from "react";
import MainProductGrid from "../MainProductGrid/MainProductGrid";

class Main extends PureComponent {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">Browse our menu</h1>
        <div className="main__description">
          <p>
            Use our menu to place an order online, or{" "}
            <span className="tool-tip-trigger link_blue">
              phone
              <span className="tool-tip">Call +1 (977) 569-34-98</span>
            </span>{" "}
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>
          <MainProductGrid handleAddToCart={this.props.handleAddToCart} />
      </main>
    );
  }
}

export default Main;
