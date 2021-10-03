import useFetch from "../../useFetch";
import Loader from "../../components/Loader/index";
import SunLink from "../../components/SunLink";
import { motion } from "framer-motion";

const Home = () => {
  const { data, isLoading } = useFetch("./data.json");

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SunLink data={data} />
        </motion.div>
      )}
    </>
  );
};

export default Home;
