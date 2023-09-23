import { StyledHome, Activities } from "../components/styles/Home.styled";
import { Testimonial } from "../components/Testimonial";
import { Destinations } from "../components/Destinations";
import { activities } from "../Data";
import { Button } from "../components/Button";
import hero from "../images/hero-1.jpg";
import img from "../images/expore-2.avif";

export const Home = () => {
  return (
    <>
      <StyledHome>
        <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
          <div className="over-lay"></div>
          <div className="hero-text">
            <h2>NEVER STOP EXPLORING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              maxime odit ad voluptatibus? Lorem
            </p>
            <Button text="BOOK NOW" />
          </div>
        </div>
      </StyledHome>
      <Activities>
        <div className="activities-container">
          {activities.map((activity) => {
            return (
              <div
                className="activity"
                style={{ backgroundImage: `url(${activity.image})` }}
                key={activity.id}
              >
                <p>{activity.text}</p>
                <div className="activity-over-lay"></div>
              </div>
            );
          })}
        </div>
      </Activities>
      <div style={{ height: "50vh" }}></div>
      <Testimonial head="Testimonial" image={img} name="Kelvin Okolo" />
      <Destinations />
    </>
  );
};