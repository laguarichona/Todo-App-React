import { useState } from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



function App() {

  return (
// Llamamos al Provider y al componente que tiene la Interfaz
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};


export default App;

/* Por cada objeto encontrado en el array, vamos a crear un componente Misu */
/* Vamos a renderizar el array */
/* Los .map trabajan con un arrown funtion */

/* La lista se renderiza a partir del TODO */
/* Este todo funciona de la misma manera que una props */
/* // onComplete es una propiedad derivada; que recibe una función, que se ejecutará en la aplicación principal, en vez de enviar el estado al componente para generar dicha función en los componentes, se envía la función que se ejecutará en la aplicación principal, para que la aplicación principal se encargue de actualizar el estado  y el componente se encargue de renderizar la información que se le envía a través de las props. */


/* Misu renderiza cada uno de los íconos */