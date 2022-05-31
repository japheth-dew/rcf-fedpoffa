import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Socials from "./Socials";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/rcf_logo.png";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "ONLINE GIVING", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => (
    setShowMenu(!showMenu)
  )

  return (
    <nav className="">
      {/* //  ---------desktop--------- */}

      <div className="md:flex flex-row justify-between hidden items-center w-full  ">
        


        <div >
          {links.map((link) => (

            <Link to={link.link}>
              <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}

                className="text-white font-bold p-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 mx-1 inline-flex">
                {link.name}
              </motion.p>
            </Link>

          ))}
        </div>

     

      </div>


      {/* ------------------ mobile------------------- */}


      <div className="md:hidden  ">

        <div className="flex md:flex-row items-center p-3 ml-5">
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

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleClick}

          className="text-white text-[2rem]   absolute right-6 top-5  ">
          {!showMenu ? <GiHamburgerMenu /> : <GrClose />}
        </motion.button>

        {showMenu &&
          (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, duration: 100 }}
            exit={{ opacity: 0 }}

            className="flex flex-col items-center relative  bg-gradient-to-r from-violet-500 to-fuchsia-500 w-screen">

            {links.map((link) => (

              <Link to={link.link}>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}

                  className="text-white font-bold p-2 hover:bg-shade2 my-2 ">
                  {link.name}
                </motion.p>
              </Link>

            ))}
            <div className="my-4 -mr-6">

              <Socials />
            </div>
          </motion.div>)}
      </div>
    </nav >

  );
};

export default Nav;
