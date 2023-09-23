import { StyledFooter } from "./styles/Footer.styled"
import { FaFacebookF, FaInstagram, FaTwitter, FaSlack } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
      <StyledFooter>
        <div className="links">
          <Link to="https://www.facebook.com">
            <FaFacebookF />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://www.twitter.com">
            <FaTwitter />
          </Link>
          <Link to="https://www.slack.com">
            <FaSlack />
          </Link>
            <p>Kel-D-Coder &copy; 2023 </p>
        </div>
      </StyledFooter>
    );
}