import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebookSquare } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='mr-[2rem]'>
      <ul className="flex  text-2xl text-white gap-3 mr-5">
        <motion.li
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className='hover:text-shade4'
        >
          {" "}
          <FaFacebookSquare />{" "}
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className='hover:text-shade4'
        >
          {" "}
          <FaWhatsappSquare />{" "}
        </motion.li>
        <motion.li
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className='hover:text-shade4'
        >
          {" "}
          <FaYoutube />{" "}
        </motion.li>
      </ul>
    </div>
  );
}

export default Socials