import React from "react";
import Main from "../components/Main";
import { SideBar } from "../components/SideBar";
import Info from "../components/Info";
import About from "../components/About.jsx";
import Education from "../components/Education";

import "../styles/App.css";

const App = () => {
  return (
    <Main>
      <SideBar>
        <About />
      </SideBar>
      <Info>
       <Education />
      </Info>
    </Main>
  );
};

export default App;