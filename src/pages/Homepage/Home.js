import useFetch from "../../useFetch";
import Loader from "../../components/Loader/index";
import SunLink from "../../components/SunLink";

const Home = () => {
  const { data, isLoading } =
    useFetch("./data.json");

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <>
          <SunLink data={data} />
        </>
      )}
    </>
  );
};

export default Home;
