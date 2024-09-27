import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experinces from "./components/Experinces";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  const [theam, setTheam] = useState("light");

  useEffect(() => {
    if (theam === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const changeTheam = (changeTheam) => {
    setTheam(changeTheam);
  };

  return (
    <div className="overflow-x-hidden antialiased selection:bg-orange-300 selection:text-orange-600 h-full">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto md:px-8 text-white">
        <NavBar handleChangeTheam={changeTheam} CurrentTheam={theam} />
        <Hero />
        <About />
        <Technologies />
        <Experinces />
        <Project />
        <Contact />
      </div>
    </div>
    // <Sidebar />
  );
}

export default App;
