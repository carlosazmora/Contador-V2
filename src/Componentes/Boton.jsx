import React from 'react';
import "../Stylesheets/Boton.css";

function Boton( {texto, tipo, manejarClick} ) {
  return (
    <button className={tipo === "Suma" ? "Suma" : tipo === "Resta" ? "Resta" : tipo === "Asignacion" ? "Asignacion" : tipo === "Reinicio" ? "Reinicio" : ""} onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;