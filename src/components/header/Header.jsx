import React from "react";
import logo from "../../images/rcf_logo.png";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="sticky top-0 z-999 md:flex top-0 left-0 shadow-xl w-full justify-between items-center bg-white">
      <div className="flex md:flex-col items-center p-3 ml-5">
        <div className="w-8 mr-1 ">
          <img src={logo} alt="rcf_logo" />
        </div>
        <p className="font-bold text-sm text-shade1 ">
          RCF FEDPOFFA
        </p>
      </div>
      <Nav />
      <div className="hidden md:inline">
        <Socials />
      </div>
    </header>
  );
};

export default Header;
