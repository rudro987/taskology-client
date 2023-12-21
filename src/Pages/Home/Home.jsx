import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Title of the site | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-[85rem] mx-auto">
      <h1 className="text-3xl">This is Home Route</h1>
      </div>
    </div>
  );
};

export default Home;
