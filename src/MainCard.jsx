import React from "react";
import { motion } from "framer-motion";

export const MainCard = ({ projectRef }) => {
  const sendMail = () => {
    const mailto: string = "mailto:garzotto5389@gmail.com";
    window.location.href = mailto;
  };

  const openLinkedIn = () => {
    console.log("click");
    window.open("https://www.linkedin.com/in/ivan-garzotto-iii", "_blank");
  };

  return (
    <div
      ref={projectRef}
      className="flex items-center min-h-screen text-slate-50"
    >
      <div className="flex-auto basis-1/2 m-8 p-4 border border-solid border-fuchsia-600 border-4 rounded-md">
        <h1 className="text-8xl m-8 py-4 font-display">
          Hi, I'm <span>Ivan.</span>
        </h1>
        <p className="text-4xl m-8 leading-normal">
          I'm a frontend developer. I love HTML, CSS, JavaScript and React. I'm
          currently learning Node/Express as well.
        </p>
      </div>
      <motion.div className="flex flex-col basis-1/2 p-4 mx-auto">
        <div className="mb-6">
          <img
            className="h-96 min-w-96 mx-auto"
            src={require("./img/ilg.png")}
            alt="A photo of the page author"
          />
        </div>

        <div className="flex flex-row mx-auto">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={sendMail}
          >
            <i className="fa-solid fa-envelope text-5xl px-2 text-zinc-100"></i>
          </motion.div>
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={openLinkedIn}
          >
            <i className="fa-brands fa-linkedin text-5xl px-2 text-zinc-100"></i>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
