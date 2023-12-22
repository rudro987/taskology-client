import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-banner min-h-[100vh] w-full">
      <div className="w-full min-h-[100vh] flex items-center max-w-[85rem] mx-auto">
        <h1 className="text-5xl text-white">This is banner</h1>
        <Link className="" to="/taskboard">
          <button className="btn btn-primary text-xl">Let&apos;s Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
