import React from "react";
import { motion } from "framer-motion";

export const MainCard = () => {
  return (
    <div className="flex items-center min-h-screen text-slate-50">
      <div className="flex-auto basis-1/2 m-8 p-4 border border-solid border-fuchsia-600 border-4 rounded-md">
        <h1 className="text-8xl font-bold m-8 py-4">
          Hi, I'm <span>Ivan.</span>
        </h1>
        <p className="text-4xl m-8">I'm a frontend developer.
        I love HTML, CSS, JavaScript and React.
        I'm currently learning Node/Express as well.</p>
      </div>
      <motion.div className="flex-auto basis-1/2 m-8 p-4">
        <img className="h-96 min-w-96 mx-auto" src={require("./img/ilg.png")} />
      </motion.div>
    </div>
  );
};
