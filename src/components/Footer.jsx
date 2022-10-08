import React from "react";
import footerLogo from "../img/footer-logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogo} alt="codexist" />
        <a href="mailto: info@codex.ist">info@codex.ist</a>
      </div>
      <div className="footer__line" />
      <p className="footer__text ">Copyright © 2022 Gozde Saygili Yalcin</p>
    </footer>
  );
}
