import { TeamSection } from "./styles/About.styled"
import { teams } from "../Data";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import { FaFacebookF, FaInstagram, FaSlack } from "react-icons/fa6";

export const Teams = () => {
    return (
      <TeamSection>
        <h1 data-aos="fade-up">Our Teams</h1>

        <div className="teams" data-aos="fade-up" data-aos-delay="250">
          {teams.map((team) => {
            return (
              <div className="team" key={team.id}>
                <img src={team.image} alt="" />
                <h2>{team.name}</h2>
                <p>{team.text}</p>

                <div className="social">
                  <Link to="https://www.facebook.com">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.instagram.com">
                    <FaInstagram />
                  </Link>
                  <Link to="https://www.slack.com">
                    <FaSlack />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </TeamSection>
    );
}