import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="text-lg text-left tracking normal mt-16">
      {error && <div> {error}</div>}
      {isPending && (
        <div className="flex justify-center items-center text-2xl">Loading...</div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
