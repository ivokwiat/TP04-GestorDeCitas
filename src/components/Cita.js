import React from 'react'

export default function Cita({Mascota,Dueño,Fecha,Hora,Sintomas}) {

  return (
    <div className="cita">
        <p>Mascota: <span>{Mascota}</span></p>
        <p>Dueño: <span>{Dueño}</span></p>
        <p>Fecha: <span>{Fecha}</span></p>
        <p>Hora: <span>{Hora}</span></p>
        <p>Sintomas: <span>{Sintomas}</span></p>
        <button className="button elimnar u-full-width">Eliminar × </button>
    </div>
  )
} 
