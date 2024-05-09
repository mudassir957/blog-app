import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div className="flex justify-center items-center text-2xl mt-8">
          Loading...
        </div>
      )}
      {error && <div>{error}</div>}
      {blog && (
        <article className="m-8 p-4 shadow-md shadow-blue-400 hover:shadow-blue-600">
          <h2 className="text-2xl"> {blog.title}</h2>
          <p className="text-sky-600"> Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <div className="flex flex-row justify-between">
            <button
              className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mt-4"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mt-4"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
