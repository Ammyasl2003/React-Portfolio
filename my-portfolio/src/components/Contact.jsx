import React from "react";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__info">
          <div className="contact__card">
            <i className="uil uil-envelope contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">amandeep@example.com</span>
          </div>
          <div className="contact__card">
            <i className="uil uil-phone contact__card-icon"></i>
            <h3 className="contact__card-title">Phone</h3>
            <span className="contact__card-data">+91 9876543210</span>
          </div>
        </div>

        <form action="#" className="contact__form">
          <input type="text" placeholder="Your Name" className="contact__input" />
          <input type="email" placeholder="Your Email" className="contact__input" />
          <textarea placeholder="Your Message" className="contact__input"></textarea>
          <button className="button button--flex">
            Send Message <i className="uil uil-message button__icon"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
