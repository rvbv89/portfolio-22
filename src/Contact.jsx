import React from "react";

export const Contact = ({ contactRef }) => {
  return (
    <div
      ref={contactRef}
      className="flex items-center min-h-screen text-slate-50"
    >
      <div className="flex-auto basis-1/2 mx-20 p-4">
        <div className="flex flex-row">
          <h1 className="text-5xl pb-8 pr-6 flex-nowrap font-display">
            Contact Me
          </h1>
          <div className="my-4 w-3/4 px-4 border-t-4 border-teal-500"></div>
        </div>

        <div className="text-3xl whitespace-pre-line">
          <p className="pb-6">
            I'm currently open to work opportunities. If you're looking for a
            dependable, hard-working developer, I'd love to hear from you!
          </p>
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="mr-4">Email:</span>
              <i className="fa-solid fa-envelope text-5xl"></i>
            </div>
            <div>
              <span className="mr-4">LinkedIn:</span>
              <i className="fa-brands fa-linkedin text-5xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
