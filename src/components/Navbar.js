import Logo from "../images/icons/favicon_io/favicon-32x32.png";
import { NavLink, Outlet } from "react-router-dom";
import { StyledNav } from "./styles/Navbar.styled";
import { FaFacebookF, FaSlack, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <StyledNav>
      <div className="logo">
        <img src={Logo} alt="" />
        <h2>Travelers</h2>
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <Outlet />
      </div>

      <div className="social-links">
        <NavLink to="https://www.facebook.com">
          <FaFacebookF />
        </NavLink>
        <NavLink to="https://www.instagram.com">
          <FaInstagram />
        </NavLink>
        <NavLink to="https://www.twitter.com">
          <FaTwitter />
        </NavLink>
        <NavLink to="https://www.slack.com">
          <FaSlack />
        </NavLink>
      </div>
    </StyledNav>
  );
};
