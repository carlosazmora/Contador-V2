import React from 'react';
import "../Stylesheets/Contador.css"

function Contador({ numClicks }) {
  return (
    <div className="contador">
      {numClicks}
    </div>
  );
}

export default Contador;