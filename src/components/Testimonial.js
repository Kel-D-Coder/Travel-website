import { StyledTestimonial } from "./styles/Home.styled";

export const Testimonial = ({ head, image, name }) => {
  return (
    <>
      <StyledTestimonial>
        <h1>{head}</h1>
        <div className="testimonial">
          <div className="picture">
            <img src={image} alt="" />
          </div>
          <div className="message">
            <blockquote>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              esse modi illum quis hic nobis nulla, aliquid, repudiandae
              obcaecati accusamus amet eaque quia eligendi placeat veritatis
              deleniti consectetur? Incidunt, laudantium!"
            </blockquote>
            <p>
              - <em>{name}</em>
            </p>
          </div>
        </div>
      </StyledTestimonial>
    </>
  );
};
