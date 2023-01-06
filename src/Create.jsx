import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import useFetch from "./useFetch";
import { motion } from "framer-motion";

const Create = () => {
  const { data: blogs } = useFetch("https://blog-server.herokuapp.com/blogs");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState(undefined);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const authors = [];

  blogs && blogs.map((blog) => authors.push(blog.author));

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
      image,
      date: new Date().toISOString().slice(0, 10),
    };

    setIsPending(true);

    fetch("https://blog-server.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then((res) => {
      if (!res.ok) {
        alert("Whoops something went wrong");
        throw Error("Could not add blog"); //add try catch
      }
      setIsPending(false);
      setTitle("");
      setBody("");
      setImage(null);
      setAuthor(undefined);
      e.target.children[5][0].selected = true;
      //blog added
      setTimeout(() => {
        history.push("/");
        Redirect("/");
      }, 2000);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
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
        <select
          value={author}
          required
          onChange={(e) => {
            setAuthor(e.target.value);
            e.target[0].disabled = true;
          }}
        >
          <option>Select author</option>
          {authors &&
            [...new Set(authors)].map((author) => (
              <option key={authors.indexOf(author)}>{author}</option>
            ))}
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
          src={image ? image : "https://via.placeholder.com/144"}
          alt="preview image"
        />

        <motion.button whileTap={{ scale: 0.9 }} disabled={isPending}>
          {!isPending ? "Add Blog" : "Adding Blog..."}
        </motion.button>
      </form>
    </div>
  );
};

export default Create;
