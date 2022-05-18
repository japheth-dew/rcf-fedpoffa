import React from 'react'
import {FaFacebookSquare} from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div >
      <ul className="flex  text-2xl text-shade1 gap-3 mr-5">
        <li>
          {" "}
          <FaFacebookSquare />{" "}
        </li>
        <li>
          {" "}
          <FaWhatsappSquare />{" "}
        </li>
        <li>
          {" "}
          <FaYoutube />{" "}
        </li>
      </ul>
    </div>
  );
}

export default Socials