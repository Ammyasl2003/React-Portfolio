import React from "react";
import amyimage from "../assets/ammy.png";
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={amyimage} alt="about" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I am an MCA student with a passion for web development, focusing on
            modern frontend technologies and problem-solving.
          </p>

          <div className="about__buttons">
            <a download href="/assets/resume.pdf" className="button button--flex">
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
