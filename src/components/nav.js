import React from "react";
import logo from "../images/github.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <h1 className="navbar-brand">Weather App</h1>
      <a href="https://chaitanya-raj.github.io" className=" mr-sm-2">
        <img src={logo} alt="github" />
      </a>
    </nav>
  );
};

export default Nav;
