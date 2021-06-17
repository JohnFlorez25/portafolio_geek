import React from 'react';

//Componentes stateless retorno implicito
const Main = ( { children } )  => (
    <>
      <h1>Estoy en Main</h1>
      { children }
    </>
)

export default Main;

