import React from "react";
import Main from "../components/Main";
import { SideBar } from "../components/SideBar";
import Info from "../components/Info";
import About from "../components/About.jsx";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificate from "../components/Certificate";
import Skills from '../components/Skills'

const App = () => {
  return (
    <Main>
      <SideBar>
        <About />
      </SideBar>
      <Info>
        <Education />
        <Experience />
        <Certificate />
        <Skills />
      </Info>
    </Main>
  );
};

export default App;
