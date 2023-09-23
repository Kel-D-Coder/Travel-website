import { styled } from "styled-components";

export const StyledHome = styled.div`
  .hero {
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;

    .over-lay {
      position: absolute;
      height: 90vh;
      width: 100%;
      background-color: rgba(132, 132, 132, 0.25);
    }

    .hero-text {
      position: absolute;
      margin-top: 13rem;
      display: inherit;
      flex-direction: column;

      h2 {
        text-align: center;
        font-weight: lighter;
        font-size: 50px;
        color: white;
      }

      button {
        justify-self: center;
        width: fit-content;
        margin: auto;
        padding: 20px 35px;
        background-color: #ffcccb;
        border: none;
        color: white;

        &:hover {
          border: 2px solid white;
          background-color: transparent;
          cursor: pointer;
          transition: all 0.19s ease;
        }
      }

      p {
        max-width: 35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: -20px;
        font-size: 20px;
        text-align: center;
        color: gray;
        letter-spacing: 1px;
      }
    }
  }
`;

export const Activities = styled.section`
  .activities-container {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 50px;
    position: absolute;
    bottom: -20rem;
  }

  .activity {
    position: relative;
    height: 400px;
    width: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.1s ease-in;
      cursor: pointer;

      p {
        transform: translate(0, -15px);
        transition: transform 0.3s ease-in;
      }
    }

    p {
      margin-top: 22rem;
      color: white;
      font-weight: bolder;
      font-size: large;
      z-index: 1;
    }

    .activity-over-lay {
      position: absolute;
      width: 300px;
      height: 400px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledTestimonial = styled.section`
  background-color: rgba(174, 177, 176, 0.15);
  height: 120vh;
  padding-top: 20px;
  max-width: 100%;

  h1 {
    text-align: center;
    font-weight: lighter;
    font-size: xx-large;
    letter-spacing: 3px;
  }

  .testimonial {
    display: flex;
    justify-content: flex-start;
    position: relative;

    .picture > img {
      height: 600px;
      width: 510px;
      margin-left: 220px;
    }
  }

  .testimonial > .message {
    background-color: white;
    height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    place-content: center;
    text-align: center;
    position: absolute;
    top: 180px;
    left: 40rem;
  }

  .message > blockquote {
    font-size: 23px;
  }
`;

export const Destination = styled.section`
  text-align: center;

  h1 {
    font-weight: lighter;
    font-size: xx-large;
    letter-spacing: 3px;
  }

  p {
    color: gray;
    margin-top: -12px;
  }

  .places {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    
    .place {
      height: 400px;
      width: 400px;
      margin-top: 30px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: end;

      .city {
        color: white;
        font-size: larger;
        z-index: 1;
      }

      .price {
        color: #f1b42f;
        padding-bottom: 6px;
        z-index: 1;
      }

      .overlay {
        position: absolute;
        height: 400px;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.2);
      }

      &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease;
        cursor: pointer;

        p {
          transform: translate(0, -15px);
          transition: transform 0.5s ease;
        }
      }
    }
  }
`;