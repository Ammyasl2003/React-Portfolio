import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Amandeep Singh</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>

          <ul className="footer__links">
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#portfolio" className="footer__link">Projects</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </div>
        <p className="footer__copy">&#169; Amandeep. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
