import { useState } from "react";
import ListadoCitas from "./components/ListadoCitas";
import Formulario from "./components/Formulario";

function App() {  
  const [listado,setListado] = useState([])
  //const [arrayCita,setArrayCita]=useState([{id:0, mascota:"Gaudi", dueño:"Ivo kus", fecha:"2018-12-09", hora:"9:12",sintomas:"el perro tiene olor a mierda"}])

  /*function EliminarCita(idCita){
    let nuevoArray = listado
    nuevoArray=nuevoArray.filter(cita => cita.id !== idCita)
    setListado(nuevoArray)
  }
  */

  const EliminarCita = (idCita) => {
    const nuevoArray = listado.filter((cita) => cita.id !== idCita);
    setListado(nuevoArray)
  }

  return (
    <>      
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <Formulario setListado={setListado} listado={listado} />
            <ListadoCitas listado={listado} onEliminar={EliminarCita}/>
          </div>
        </div>      
    </>
  );
}

export default App;
