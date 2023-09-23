import { StyledAbout } from "../components/styles/About.styled";
import { FaCheck } from "react-icons/fa6";
import { Teams } from "../components/Teams";
import { Testimonial } from "../components/Testimonial";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import hero from "../images/hero-2.jpg";
import AboutImg from "../images/safe-trip-2.avif";
import img from '../images/expore-3.avif'

export const About = () => {
  Aos.init({
    duration: 500,
    once: true,
  });
  return (
    <>
      <StyledAbout>
        <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
          <div className="over-lay">
            <h2 className="animate__animated animate__zoomInDown">
              ABOUT TRAVELERS
            </h2>
          </div>
        </div>
        <section className="about-company" data-aos="fade-up">
          <div
            className="img"
            style={{ backgroundImage: `url(${AboutImg})` }}
          ></div>
          <div className="description">
            <h2>About Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              mollitia possimus tenetur, odit magni quam qui, id fugit itaque
              cupiditate vel alias delectus corporis porro est quisquam eveniet
              temporibus cumque?{" "}
            </p>
            <p>
              <FaCheck /> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <FaCheck /> Lorem ipsum dolor sit amet.
            </p>
            <p>
              <FaCheck /> Lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>
        <Teams />
      </StyledAbout>
      <Testimonial head="What People Says" image={img} name="Jessica Charles"  />
    </>
  );
};
