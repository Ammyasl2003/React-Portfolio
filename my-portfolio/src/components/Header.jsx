import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Amandeep Singh</a>

        <div className={`nav__menu ${toggle ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#qualification" className="nav__link">Qualification</a></li>
            <li className="nav__item"><a href="#portfolio" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact-Me</a></li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
        </div>

        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
