import React from 'react'
import Cita from './Cita';

export default function ListadoCitas({listado}) {
  return (
    <div className="one-half column">
    <h2>Administra tus citas</h2>
          {listado.map((item)=>(
            <div className="cita">
              <Cita          
                Mascota={item.Mascota}
                Dueño={item.Dueño}
                Fecha={item.Fecha}
                Hora={item.Hora}
                Sintomas={item.Sintomas}
              />
            </div>          
          ))}
      </div>
  )
}
