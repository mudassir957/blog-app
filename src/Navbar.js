import { Link } from "react-router-dom";
// import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800">
      <ul className="flex mx-16">
        <li class="mr-6">
          <a
            class="inline-block border border-white rounded hover:border-gray-400 text-white hover:bg-gray-900 m-3 py-2 px-4"
            href="/"
          >
            The Blog
          </a>
        </li>
        <li className="mr-6">
          <Link
            className="inline-block border border-white rounded hover:border-gray-400 text-white hover:bg-gray-900 m-3 py-2 px-4"
            to="/"
          >
            Home
          </Link>
        </li>
        <li class="mr-6">
          <Link
            className="inline-block border border-white rounded hover:border-gray-400 text-white hover:bg-gray-900 m-3 py-2 px-4"
            to="/create"
          >
            New Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
