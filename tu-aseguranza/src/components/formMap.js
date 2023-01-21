import Fade from "react-reveal/Fade";
import "./formMap.css";
// import React from "react";

export default function FormMap() {
  return (
    <div className="f-m__container">
      <div className="f-m__wrapper">
        <section className="iframe__section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d208.34787226775913!2d-86.79375990727833!3d33.330161139454965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888923bd7b0c2053%3A0x739b48be2e95f7db!2s102%20Commerce%20Ct%2C%20Pelham%2C%20AL%2035124!5e0!3m2!1sen!2sus!4v1673144633359!5m2!1sen!2sus"
            width="100%"
            height="650"
            loading="lazy"
          ></iframe>
        </section>

        <section className="form-section">
      <Fade bottom cascade>

          <form
            action="https://formsubmit.co/robr@protocol80.com"
            method="POST"
          >
            <h3 className="purple">Get A Quote</h3>
            <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at magni facere impedit aut tempore
            </p>
            <div className="form__names">
              <input
                type="text"
                name="fitst name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last name"
                placeholder="Last Name"
                required
              />
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="tel"
              placeholder="123-456-789"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <textarea rows="4" cols="50" placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
          </Fade>
        </section>
      </div>
    </div>
  );
}
