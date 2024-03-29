import React from "react";
import { motion } from "framer-motion";

export const MainCard = ({ projectRef }) => {
  const sendMail = () => {
    const mailto = "mailto:garzotto5389@gmail.com";
    window.location.href = mailto;
  };

  const openLinkedIn = () => {
    console.log("click");
    window.open("https://www.linkedin.com/in/ivan-garzotto-iii", "_blank");
  };
  const openLink = (url) => {
    console.log("click");
    window.open(url, "_blank");
  };

  return (
    <div
      ref={projectRef}
      className="box-border flex flex-col mx-auto max-w-screen-sm md:max-w-full lg:flex-row items-center min-h-screen text-slate-50"
    >
      <motion.div
        className="flex-auto basis-1/2 m-4 md:m-20 p-6 border border-solid border-fuchsia-600 border-4 rounded-md"
        initial={{
          x: -800,
        }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 2.5 }}
      >
        <h1 className="text-8xl mx-auto md:text-8xl m-6 py-4 font-display">
          Hi, I'm <span>Ivan.</span>
        </h1>
        <p className="text-4xl md:m-8 leading-normal">
          I'm a frontend developer. I love HTML, CSS, JavaScript and React. I'm
          currently learning Node/Express as well.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col basis-1/2 p-4 mx-auto"
        initial={{
          x: 700,
        }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 2.5, delay: 0.75 }}
      >
        <div className="mb-6">
          <img
            className="max-w-sm mx-auto"
            src={require("./img/ilg.png")}
            alt="The page author"
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
            onClick={() => {
              openLink("https://github.com/rvbv89");
            }}
          >
            <i className="fa-brands fa-github text-5xl px-2 text-zinc-100"></i>
          </motion.div>
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              openLink("https://www.linkedin.com/in/ivan-garzotto-iii");
            }}
          >
            <i className="fa-brands fa-linkedin text-5xl px-2 text-zinc-100"></i>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
