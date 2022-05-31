import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ text, margin }) => {
    return (
        <motion.button
            whileTap={{ scale: .9 }}
            whileHover={{ scale: 1.1 }}

            className={`text-white font-semibold border-4 px-5 py-2 rounded-md text-[1.2rem]  bg-opacity-20 ${margin && "mb-4"}`}
        >
            {text}
        </motion.button>
    )
}

export default Button