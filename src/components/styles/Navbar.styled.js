import { styled } from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #e5dada;
  padding: 20px 0;
  margin-top: 0;

  a {
    color: black;
  }

  .logo {
    display: inherit;
    width: fit-content;
    height: 50px;

    h2 {
      margin-top: 10px;
      font-weight: bolder;
    }
  }

  .links {
    height: fit-content;
    margin-top: 20px;

    a {
      text-decoration: none;
      margin-right: 20px;
    }
  }

  .social-links {
    height: fit-content;
    margin-top: 20px;

    svg {
      margin-right: 19px;
    }
  }

  .active {
    color: rgb(222, 49, 99);
    font-weight: bolder;
  }
`;
