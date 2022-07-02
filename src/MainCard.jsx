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
      className="box-border mx-auto max-w-fit md:max-w-full flex flex-col lg:flex-row items-center min-h-screen text-slate-50"
    >
      <div className="flex-auto md:basis-1/2 md:m-32 p-6 border border-solid border-fuchsia-600 border-4 rounded-md">
        <h1 className="text-8xl md:m-8 py-4 font-display">
          Hi, I'm <span>Ivan.</span>
        </h1>
        <p className="text-4xl md:m-8 leading-normal">
          I'm a frontend developer. I love HTML, CSS, JavaScript and React. I'm
          currently learning Node/Express as well.
        </p>
      </div>
      <motion.div className="flex flex-col basis-1/2 p-4 mx-auto">
        <div className="mb-6">
          <img
            className="max-w-sm mx-auto"
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
