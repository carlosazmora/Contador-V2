import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';

function App() {
  const [cuenta, setCuenta] = useState(0);
  const [valorInput, setValorInput] = useState('');

  const sumar = () => {
    setCuenta(cuenta + 1);
  };

  const restar = () => {
    setCuenta(cuenta - 1);
  };

  const asignarContador = () => {
    // Convertir el valor del input a un número antes de asignarlo
    const nuevoValor = parseInt(valorInput, 10);
    if (!isNaN(nuevoValor)) {
      setCuenta(nuevoValor);
      setValorInput("");
    }else{
      
    }
  };

  const resetContador = () => {
    setCuenta(0);
  };

  const manejarInputChange = (e) => {
    setValorInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>¡Hola, mundo!</h1>
      <div className="contenedor">
        <Contador numClicks={cuenta} />
        <div className="botones">
          <Boton texto="Suma" tipo="Suma" manejarClick={sumar} />
          <Boton texto="Resta" tipo="Resta" manejarClick={restar} />
          <Boton texto="Asignación" tipo="Asignacion" manejarClick={asignarContador} />
          <Boton texto="Reinicio" tipo="Reinicio" manejarClick={resetContador} />
        </div>
        <input
          type="number"
          value={valorInput}
          onChange={manejarInputChange}
          placeholder="Ingresa un valor"
        />
      </div>
    </div>
  );
}

export default App;
