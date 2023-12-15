import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';


function App() {

  const [cuenta, setCuenta] = useState(0);

  const handleClick = () =>{
    setCuenta(cuenta + 1);
  }

  const resetContador = () =>{
    setCuenta(0);
  }

  return (
    <div className="App">
      <h1>¡Hola, mundo!</h1>
      <div className="contenedor">
        <Contador numClicks = {cuenta}/>
        <div className="botones">
        <Boton texto = "Click" tipo = "Click" manejarClick={handleClick}/>
        <Boton texto = "Reinicio" tipo = "Reinicio" manejarClick={resetContador}/>
        </div>
      </div>
    </div>
  );
}

export default App;
