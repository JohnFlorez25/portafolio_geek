import React from "react";
import Main from "../components/Main";
//Componente como función tipo stateful
let elements = ["Sobre mi", "Estudios", "Experiencia", "Certificaciones", "Habilidades"];

//importando estilos
import "../styles/App.css";

const App = () => {
  return (
    <div className="container-portafolio">
      <h1>Mi Portafolio Geek</h1>
      <Main 
        title="Mis Estudios" 
        descripcion = "Técnico Laboral en SW" 
      />
    </div>
  );
};

export default App;
      // {elements.map((title, index) => {
      //   return <Main key={`${title}-${index}-id`} title={title} />;
      // })}