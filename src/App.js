import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/body/LandingPage";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className=" w-full h-full">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
