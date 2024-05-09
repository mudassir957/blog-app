import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list px-8">
      <h2 className="text-2xl text-center">{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="flex flex-row justify-center">
              <div className="my-4 p-4 shadow-sm shadow-blue-400 hover:shadow-blue-600 w-9/12">
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <br />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
