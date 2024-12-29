import { Component } from "react";
import MainButton from "../MainButton/MainButton";

class MainMenuButtons extends Component {
  constructor(props) {
    super(props);
    this.handleFilterButton = this.handleFilterButton.bind(this);
    this.state = {
      primaryButtonIndex: "Dessert",
    };
  }

  handleFilterButton(index) {
    this.setState({ primaryButtonIndex: index });

  }

  render() {
    return (
      <div>
        <MainButton
          primary={this.state.primaryButtonIndex === "Dessert"}
          text="Dessert"
          onClick={() => this.handleFilterButton("Dessert")}
        />
        <MainButton
          primary={this.state.primaryButtonIndex === "Dinner"}
          text="Dinner"
          onClick={() => this.handleFilterButton("Dinner")}
        />
        <MainButton
          primary={this.state.primaryButtonIndex === "Breakfast"}
          text="Breakfast"
          onClick={() => this.handleFilterButton("Breakfast")}
        />
      </div>
    );
  }
}

export default MainMenuButtons;
