import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

const projects = [
  {
    id: 1,
    name: "Project 1",
    about: "This is project 1",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    name: "Project 2",
    about: "This is project 2",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Project 3",
    about: "This is project 3",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
