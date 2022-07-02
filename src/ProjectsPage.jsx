import React from "react";

export const ProjectsPage = ({ projectRef }) => {
  return (
    <div
      ref={projectRef}
      className="flex flex-col items-center mx-auto min-h-screen max-w-fit text-slate-50"
    >
      <div className="flex-auto basis-1/2 md:mx-40 p-4">
        <div className="flex flex-row">
          <div className="my-4 w-3/4 px-4 border-t-4 border-teal-500"></div>
          <h1 className="text-5xl pb-8 pl-6 flex-nowrap font-display">
            Projects
          </h1>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            window.open("https://rvbv89-supachat.netlify.app/", "_blank");
          }}
          className="container max-w-6xl mx-auto p-6 box-border border border-solid bg-customGrey border-zinc-500 
      rounded-md flex flex-col items-center cursor-pointer"
        >
          <h2 className="text-2xl py-4 font-display">ChatApp</h2>
          <img
            className="port-img max-w-content"
            src={require("./img/chat.png")}
            alt="A screenshot of my chat app"
          />
          <p class="port-desc text-lg py-4">
            I built this app with React and Chakra-UI for the frontend, and
            Supabase for the backend. I initially wrote the app using Socket.IO
            last year, but I refactored the app to use Supabase this spring. I'm
            continually updating this app, and I'm currently incorporating it
            into a more fully-featured social media app.
          </p>
        </div>
        <div
          className="container max-w-6xl mx-auto my-6 p-6 box-border border border-solid bg-customGrey border-zinc-500 
      rounded-md flex flex-col items-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://cheery-travesseiro-5c9583.netlify.app/",
              "_blank"
            );
          }}
        >
          <h2 className="text-2xl py-4 font-display">Storefront Demo</h2>
          <img
            className="port-img max-w-content"
            src={require("./img/store.png")}
            alt="A screenshot of my store app"
          />
          <p className="port-desc text-lg py-4">
            I built a store demo which connects to the Fake Store API to
            generate product data. The products are sortable into categories,
            and can be searched for within those categories. I made a "cart"
            which allows a user to add and delete products, and view the current
            price total. I used React for the front-end, along with the
            Semantic-UI React component library for the mark-up.
          </p>
        </div>
        {/* <div>
        <h2>Bird Watcher</h2>
        <p className="project-dsc"></p>
      </div> */}
      </div>
    </div>
  );
};
