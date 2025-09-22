import React from "react";
import amyimage from "../assets/amyy.jpg";
function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/in/amandeep-singh-255b98267" target="_blank" className="home__social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/amandeep123456789" target="_blank" className="home__social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.instagram.com/amandeepsingh9159" target="_blank" className="home__social-icon">
              <i className="uil uil-instagram"></i>
            </a>
          </div>

          <div className="home__img">
            <img src={amyimage} alt="profile" className="home__blob-img" />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Amandeep Singh</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">A passionate developer focused on creating user-friendly and modern interfaces.</p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
