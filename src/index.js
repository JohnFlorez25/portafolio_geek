//Importar react y react-dom e instalar el elemento en
//el aplicativo
import React from 'react';
import ReactDOM from 'react-dom';
//referencia hacia nuestra aplicación (componente inicial a renderizar)
//import Main from './components/Main.jsx';
import App from './containers/App';
/**
 * ReactDOM.render(
 *  ¿Que voy a pintar (Elemento)? , 
 *  ¿Donde lo voy a mostrar?
 * )
 * Componente: Main ---- Elemento: <Main />
 */
ReactDOM.render(<App />, document.getElementById('app'));
