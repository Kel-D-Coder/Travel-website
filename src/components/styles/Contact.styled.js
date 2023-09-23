import styled from "styled-components";

export const ContactStyle = styled.div`
  .hero {
    height: 80vh;
    width: 100%;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .over-lay {
      position: absolute;
      height: 80vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);

      h2 {
        text-align: center;
        font-weight: lighter;
        margin-top: 15rem;
        font-size: 50px;
        color: white;
        z-index: 1;
      }
    }
  }

  .contact {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 10rem;

    .form {
      width: 300px;
      background-color: rgba(174, 177, 176, 0.2);
      padding: 20px 10rem 20px 20px;

      label {
        width: 100px;
        display: inline-block;
        margin: 5px;
      }

      input,
      textarea {
        padding: 5px;
        width: 25rem;
        margin: 10px 10px 11px 10px;
        resize: none;
      }

      button {
        width: fit-content;
        margin: auto;
        padding: 20px 35px;
        background-color: #ffcccb;
        border: none;
        color: white;

        &:hover {
          border: 2px solid gray;
          background-color: transparent;
          color: black;
          cursor: pointer;
          transition: all 0.19s ease;
        }
      }
    }
  }

  .info-description {
    background-color: rgba(174, 177, 176, 0.2);
    height: fit-content;
    padding: 25px;
  }
`;