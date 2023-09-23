import { BlogSection } from "../components/styles/Blog.styled";
import { blogPosts } from "../Data";
import hero from "../images/blog-hero.avif";
import "animate.css";

export const Blog = () => {
  return (
    <BlogSection>
      <div className="blog-hero" style={{ backgroundImage: `url(${hero})` }}>
        <h2 className="animate__animated animate__zoomInDown">BLOG POSTS</h2>
        <div className="over-lay"></div>
      </div>

      <section className="blogs">
        {blogPosts.map((post) => {
          return (
            <div className="blog" key={post.id}>
              <img src={post.image} alt="" />
              <h2>How to Plan Your Vacation</h2>
              <p className="person">
                {post.name} <span>•</span> {post.time}
              </p>
              <p className="text">{post.text}</p>
            </div>
          );
        })}
      </section>
    </BlogSection>
  );
};
