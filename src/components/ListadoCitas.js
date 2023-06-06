import React, { useState } from "react";
import Cita from './Cita';








export default function ListadoCitas({listado}) {
  const [count, setCount] = useState(0);
  return (
    <div className="one-half column">
    <h2>Administra tus citas</h2>
          {listado.map((item)=>(
            <div key={item.mascota} className="cita">
              <Cita cita={item} />
            </div>          
          ))}
      </div>
  )
}
