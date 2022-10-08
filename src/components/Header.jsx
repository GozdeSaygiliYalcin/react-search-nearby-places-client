import React from "react";
import logo from "../img/header-logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="codexist" />
      <div className="header__line"></div>
    </header>
  );
}
