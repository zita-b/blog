import { Link } from "react-router-dom";
import Like from "./images/like.png";
import { motion } from "framer-motion";

const BlogList = ({ blogs }) => {
  return (
    <div className="lg:translate-x-[-145px] flex lg:w-[900px] lg:flex-row flex-col lg:gap-8 lg:flex-wrap">
      {blogs.map((blog) => (
        <motion.div
          className="blog-preview relative bg-white rounded-md lg:w-[400px]"
          key={blog.id}
          whileHover={{ scale: 1.2 }}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              Written by <b>{blog.author}</b>
            </p>
            <p>Posted: {blog.date}</p>
            <img
              src={blog.image ? blog.image : "https://via.placeholder.com/144"}
              className="max-[500px]:w-20 max-[500px]:h-20 w-32 h-32 absolute max-[500px]:top-6 top-1 max-[500px]:right-12 right-20 object-scale-down"
            />
            <img
              src={Like}
              className="w-8 h-8 absolute top-9 right-9 max-[500px]:right-2 max-[500px]:top-12"
              alt="like"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
