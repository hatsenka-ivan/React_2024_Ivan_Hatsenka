import "./MainButton.css";
import { Component } from "react";

class MainButton extends Component {
  render() {
    const className = this.props.primary ? "active" : "";
    return (
      <button
        onClick={this.props.onClick}
        id={this.id}
        className={`main__button ${className}`}
      >
        {this.props.text}
      </button>
    );
  }
}

export default MainButton;