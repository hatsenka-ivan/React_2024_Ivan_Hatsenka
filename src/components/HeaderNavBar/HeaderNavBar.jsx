import "./HeaderNavBar.css";
import { Component } from "react";

export default class HeaderNavBar extends Component {
    render() {
      return (
        <nav>
          <ul className="navbar">
            <li className="navbar__element">
              <a href="/">Home</a>
            </li>
            <li className="navbar__element">
              <a href="/">Menu</a>
            </li>
            <li className="navbar__element">
              <a href="/">Company</a>
            </li>
            <li className="navbar__element">
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      );
    }
  }
  