import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="md:flex text-shade1 ">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
      >
        {showMenu ? <GrClose /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          showMenu ? "opacity-100 bg-slate-200" : "opacity-0"
        } md:opacity-100 `}
      >
        {links.map((link) => (
          <li key={link.name} className="md:mr-3 text-md font-bold my-5">
            <Link
              className="hover:text-shade3 transition duration-100"
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
