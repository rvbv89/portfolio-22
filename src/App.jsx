// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { MainCard } from "./MainCard";
import { ProjectsPage } from "./ProjectsPage";

function App() {
  return (
    <div className="bg-customDark">
      <div className="container flex flex-col mx-auto min-h-screen bg-customDark">
        <Navbar />
        <MainCard />
        <ProjectsPage />
      </div>
    </div>
  );
}

export default App;
