import React from "react";
import Socials from "./Socials";
import logo from "../../images/rcf_logo.png";
import Nav from "./Nav";


const Header = () => {
  return (
    <header className="sticky z-[999] flex top-0 left-0 shadow-xl w-full justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className=" md:flex flex-row items-center p-3 ml-[2rem] hidden  ">
        <div className="w-16 mr-1 ">
          <img src={logo} alt="rcf_logo" />
        </div>
        <div className="flex-col">
          <p className="font-bold text-md text-white ">
            RCF
          </p>
          <p className="font-bold text-md text-white ">
            FEDPOFFA
          </p>
        </div>
      </div>

      <Nav />

      <div className="md:inline hidden">

        <Socials />
      </div>

    </header>
  );
};

export default Header;
