import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { motion } from "framer-motion";
import { useHistory, Redirect } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const {
    isPending,
    error,
    data: blog,
  } = useFetch(`https://blog-server.herokuapp.com/blogs/${id}`);
  const [title, setTitle] = useState(" ");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    if (!isPending) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
      setImage(blog.image);
      setDate(blog.date);
    }
  }, [isPending]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, image, date };
    fetch(`https://blog-server.herokuapp.com/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("blog edited");
      history.push("/");
      Redirect("/");
    });
  };

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div className="create">
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select value={author} required disabled>
              <option>{author}</option>
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                  setImage(reader.result);
                };
              }}
            />

            <img
              src={image ? image : blog.image}
              alt="preview image "
              className="mb-4"
            />

            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 0.9 }}
            >
              Edit Blog
            </motion.button>
          </form>
        </div>
      )}
    </>
  );
};

export default Edit;
