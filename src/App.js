import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage/HomePage";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className=" w-full h-full flex flex-col ">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </motion.div>
  );
};

export default App;
