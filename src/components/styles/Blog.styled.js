import styled from "styled-components";

export const BlogSection = styled.section`
  .blog-hero {
    position: relative;
    height: 80vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    .over-lay {
      position: absolute;
      height: 80vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    h2 {
      position: absolute;
      font-weight: lighter;
      margin-top: 15rem;
      font-size: 50px;
      color: white;
      z-index: 1;
    }
  }

  .blogs {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    column-gap: 130px;
    row-gap: 20px;

    .blog {
      width: 29rem;

      .text {
        line-height: 28px;
      }

      h2 {
        font-weight: lighter;
        color: #ff8c00;
      }
      img {
        width: 550px;
        height: 410px;
      }

      .person {
        color: gray;

        span {
          padding: 0 10px;
        }
      }
    }
  }
`;
