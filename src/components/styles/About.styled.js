import { styled } from 'styled-components'

export const StyledAbout = styled.div`
  .hero {
    height: 75vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;

    .over-lay {
      position: absolute;
      height: 75vh;
      width: 100%;
      background-color: rgba(132, 132, 132, 0.21);
    }

    h2 {
      text-align: center;
      margin-top: 15rem;
      font-size: 50px;
      color: white;
      font-weight: lighter;
    }
  }

  .about-company {
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    gap: 50px;

    .img {
      height: 400px;
      width: 500px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .description {
      max-width: 30rem;

      h2 {
        font-weight: lighter;
        font-size: xx-large;
      }

      p {
        line-height: 26px;
        color: gray;
      }

      svg {
        color: #ff8c00;
        font-size: x-large;
        margin-right: 5px;
        margin-top: 10px;
        
      }
    }
  }
`;

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  h1 {
    font-weight: lighter;
    font-size: xx-large;
  }

  .teams {
    display: flex;
    margin-top: -50px;
    padding: 80px;
    gap: 40px;

    .team {
      max-width: 30rem;
      display: inherit;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 50%;
        height: 200px;
        width: 200px;
      }

      p {
        text-align: center;
        color: gray;
      }

      a {
        margin-right: 21px;
        color: rgba(255, 140, 0, 0.5);

        &:hover {
          color: rgb(255, 140, 0);
        }
      }
    }
  }
`;