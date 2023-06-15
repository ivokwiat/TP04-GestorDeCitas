import React, { useState } from "react";
import Cita from './Cita';
import App from "../App";



export default function ListadoCitas({listado, onEliminar}) {
  const [count, setCount] = useState(0);

  const handleEliminarCita = () => {
     onEliminar();
  }

  return (
    <div className="one-half column">
    <h2>Administra tus citas</h2>
          {listado.map((item)=>(
            <div key={item.id} className="cita">
              <Cita cita={item} onEliminar={onEliminar} />
            </div>          
          ))}
      </div>
  )
}
