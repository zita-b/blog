import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState } from "react";

const Home = () => {
  const {
    isPending,
    error,
    data: blogs,
  } = useFetch("https://blog-server.herokuapp.com/blogs");
  const [order, setOrder] = useState("Latest");

  const authors = [];
  blogs && blogs.map((blog) => authors.push(blog.author));

  return (
    <div className="home">
      <div className="flex flex-row justify-evenly border-bottom border-2 border-white-300 p-4 shadow-md">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg
        block max-[500px]:w-24 w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option>Latest</option>
          <option>Oldest</option>
        </select>

        <h2 className="text-slate-500 max-[500px]:-mr-18 max-[500px]:mt-2">{order + " Blogs"}</h2>
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs &&
        (order == "Latest" ? (
          <BlogList
            blogs={blogs.sort((a, b) => new Date(b.date) - new Date(a.date))}
          />
        ) : (
          <BlogList
            blogs={blogs.sort((a, b) => new Date(a.date) - new Date(b.date))}
          />
        ))}
    </div>
  );
};

export default Home;
