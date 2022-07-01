import React from "react";

export const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="flex items-center max-w-fit min-h-screen text-slate-50"
    >
      <div className="flex-auto basis-1/2 mx-4 md:mx-40 p-4">
        <div className="flex flex-row">
          <h1 className="text-5xl pb-8 pr-6 flex-nowrap font-display">About Me</h1>
          <div className="my-4 w-3/4 px-4 border-t-4 border-teal-500"></div>
        </div>

        <p className="text-3xl leading-normal">
          I've been working with and continually learning about Javascript and
          React for over 2 years. I'm a bit obssessed when it comes to
          Javascript -- books, blogs, articles-- I love diving deep into this
          fascinating language. I'm also very familiar with HTML and
          CSS. I've got some experience with Node and Express as well. Lately,
          I've been using Supabase for a few personal projects, and I'm really
          excited to learn more about SQL and databases!
        </p>
      </div>
    </div>
  );
};
