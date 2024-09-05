import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-primary/5 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with our latest insights, tips, and trends in the industry. Our blogs offer valuable knowledge and practical advice to help you stay ahead. Dive in to explore topics that matter most to you!"
          center
        />

        <div className="grid grid-cols-1 shadow-xl gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
