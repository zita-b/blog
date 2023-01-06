import { useHistory, useParams, Redirect } from "react-router-dom";
import useFetch from "./useFetch";
import { motion } from "framer-motion";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    isPending,
    error,
    data: blog,
  } = useFetch(`https://blog-server.herokuapp.com/blogs/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch(`https://blog-server.herokuapp.com/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
      Redirect("/");
    });
  };

  const handleEdit = () => {
    history.push(`/edit/${id}`);
    Redirect(`/edit/${id}`);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="relative">
          <h2>{blog.title}</h2>
          <p>
            <b>Written by: {blog.author}</b>
          </p>
          <div>{blog.body}</div>
          <p>Posted: {blog.date}</p>
          <img src={blog.image && blog.image} />
          <br></br>
          <div className="button-container">
            <motion.button
              onClick={handleClick}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 0.9 }}
              className="blog-button"
            >
              delete
            </motion.button>
            <motion.button
              onClick={handleEdit}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 0.9 }}
              className="blog-button"
            >
              edit
            </motion.button>
          </div>
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="absolute bottom-0 right-10 bg-transparent"
          >
            <ImFacebook2 />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            className="absolute bottom-0 right-0 bg-transparent"
          >
            <BsInstagram />
          </a>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
