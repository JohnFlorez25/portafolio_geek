import React from "react";
import Main from "../components/Main";
import { SideBar } from "../components/SideBar";
import Info from "../components/Info";
import About from "../components/About.jsx";

import "../styles/App.css";

const App = () => {
  return (
    <Main>
      <SideBar>
        <About />
      </SideBar>
      <Info>
       <h1>Acá va la información de mi super portafolio</h1>
      </Info>
    </Main>
  );
};

export default App;