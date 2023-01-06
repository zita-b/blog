import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar max-[412px]:p-2 p-6 justify-between">
      <Link to={"/"}>
        <h1 className="max-[412px]:-ml-4">The Dojo Blog</h1>
      </Link>
      <div className="max-[412px]:-ml-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
