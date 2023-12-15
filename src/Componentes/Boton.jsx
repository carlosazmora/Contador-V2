import React from 'react';
import "../Stylesheets/Boton.css";

function Boton( {texto, tipo, manejarClick} ) {
  return (
    <button className = {tipo === "Click" ? "Click" : "Reinicio"} onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;