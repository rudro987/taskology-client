import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Title of the site | Home</title>
      </Helmet>
            <h1 className="text-3xl">This is Home Route</h1>
        </div>
    );
};

export default Home;