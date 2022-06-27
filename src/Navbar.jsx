import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-customDark text-slate-50">
      <div className="container flex flex-row mx-auto pt-8 px-8">
        <div className="my-4 w-full border-t-4 border-teal-500"></div>
        <ul className="flex flex-row-reverse mx-10 gap-x-12 text-2xl">
          <li>Contact</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Github</li>
        </ul>
      </div>
    </nav>
  );
};
