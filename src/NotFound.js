import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-8 mt-8 text-2xl text-center">
      <h2 className="text-red-600"> Sorry</h2>
      <p> That page cannot be found</p>
      <a
        href="/"
        class="px-4 py-2 bg-blue-500 text-sm text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Back
      </a>
    </div>
  );
};

export default NotFound;
