import "./HeaderNavBar.css";
import React from "react";

export default React.memo(function HeaderNavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__element">
        Home
      </a>
      <a href="/" className="navbar__element">
        Menu
      </a>
      <a href="/" className="navbar__element">
        Company
      </a>
      <a href="/" className="navbar__element">
        Login
      </a>
    </nav>
  );
});
