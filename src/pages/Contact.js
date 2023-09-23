import { Button } from "../components/Button";
import { ContactStyle } from "../components/styles/Contact.styled";
import hero from "../images/contact-hero.avif";
import "animate.css";

export const Contact = () => {
  return (
    <ContactStyle>
      <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="over-lay">
          <h2 className="animate__animated animate__zoomInDown">
            GET IN TOUCH
          </h2>
        </div>
      </div>

      <div className="contact">
        <div className="form">
          <form>
            <label htmlFor="">First Name</label>
            <input type="text" />

            <label htmlFor="">Last Name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" />

            <label htmlFor="">Subject</label>
            <input type="text" />

            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Button text="Send Message" />
          </form>
        </div>

        <div className="info-description">
          <h3>Address</h3>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <h3>Phone</h3>
          <p>+1 232 3235 324</p>
          <h3>Email Address</h3>
          <p>youremail@domain.com</p>
        </div>
      </div>
    </ContactStyle>
  );
};
