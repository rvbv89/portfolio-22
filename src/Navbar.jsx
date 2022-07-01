import React from "react";
import { motion } from "framer-motion";

export const Navbar = ({ projectRef, aboutRef, contactRef, sectionView }) => {
  return (
    <nav className="bg-customDark text-slate-50">
      <div className="container flex flex-row mx-auto pt-8 px-8">
        <div className="my-4 w-full border-t-4 border-teal-500"></div>
        <ul className="flex flex-row-reverse mx-10 gap-x-12 text-2xl">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              sectionView(contactRef);
            }}
          >
            <li className="font-display">Contact</li>
          </motion.div>

          {/* <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              window.open('https://github.com/rvbv89', '_blank')
            }}
          >
            <li className="font-display">Github</li>
          </motion.div> */}
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              sectionView(projectRef);
            }}
          >
            <li className="font-display">Projects</li>
          </motion.div>

          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              sectionView(aboutRef);
            }}
          >
            <li className="font-display">About</li>
          </motion.div>
        </ul>
      </div>
    </nav>
  );
};
