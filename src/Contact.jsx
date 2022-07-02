import React from "react";

export const Contact = ({ contactRef }) => {
  return (
    <div
      ref={contactRef}
      className="flex items-center min-h-screen text-slate-50"
    >
      <div className="flex-auto basis-1/2 md:mx-40 p-4">
        <div className="flex flex-row px-6">
          <h1 className="text-5xl pb-8 pr-6 font-display">
            Contact Me
          </h1>
          <div className="my-4 w-3/4 px-4 border-t-4 border-teal-500"></div>
        </div>

        <div className="text-3xl px-4">
          <p className="pb-10 md:p-0">
            I'm currently open to work opportunities. If you're looking for a
            dependable, hard-working developer, I'd love to hear from you!
          </p>
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="mr-2 font-display">Email:</span>
              <a href="mailto:garzotto5389@gmail.com">garzotto5389@gmail</a>
            </div>
            <div className="mb-4">
              <span className="mr-2 font-display">Github:</span>
              <a href="https://github.com/rvbv89" target="_blank">
                https://github.com/rvbv89</a>
            </div>
            <div>
              <span className="mr-2 font-display">LinkedIn:</span>
              <span></span>
              <a className="break-normal" href="https://www.linkedin.com/in/ivan-garzotto-iii/" target="_blank">
                https://www.linkedin.com/in/ivan-garzotto-iii/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
