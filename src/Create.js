import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2 className="text-xl text-center mt-8"> Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 my-4 font-medium"
          >
            Blog title:
          </label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-gray-700 my-4 font-medium"
          >
            Blog body:
          </label>
          <textarea
            id="body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 my-4 font-medium"
          >
            Blog author:
          </label>

          <input
            type="text"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          {!isPending && (
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Blog
            </button>
          )}
          {isPending && (
            <button
              disabled
              className="px-4 py-2 bg-gray-400 text-gray-700 rounded-md cursor-not-allowed"
            >
              Adding blog...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
