import React, { useState } from "react";
import ListadoCitas from "./ListadoCitas";


export default function Cita({cita, onEliminar}) {

  const {mascota,propietario,fecha,hora,sintomas} = cita;

  return (
    <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={() => onEliminar(cita.id)}>Eliminar × </button>
    </div>
  )
} 
