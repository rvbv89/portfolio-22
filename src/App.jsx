// import logo from "./logo.svg"
import React, { useRef } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { MainCard } from "./MainCard";
import { About } from "./About";
import { ProjectsPage } from "./ProjectsPage";
import { Contact } from "./Contact";

function App() {
  //refs for 'scroll-to' behavior
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  //nav link scroll function
  const sectionView = (scrollRef) =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-customDark">
      <div className="container flex flex-col mx-auto min-h-screen bg-customDark">
        <Navbar
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
          sectionView={sectionView}
        />
        <MainCard />
        <About aboutRef={aboutRef} />
        <ProjectsPage projectRef={projectRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
}

export default App;
