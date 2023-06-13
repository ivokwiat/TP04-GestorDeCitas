import { useState } from "react";
import ListadoCitas from "./components/ListadoCitas";
import Formulario from "./components/Formulario";

function App() {  
  const [listado,setListado] = useState([])
  const [arrayCita,setArrayCita]=useState([{id:0, mascota:"Gaudi", dueño:"Ivo kus", fecha:"2018-12-09", hora:"9:12",sintomas:"el perro tiene olor a mierda"}])

  function EliminarCita(id){
    let nuevoArray =listado
    nuevoArray=nuevoArray.filter(cita => cita.id !== id)
    setArrayCita(nuevoArray)
  }

  return (
    <>      
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <Formulario setListado={setListado} listado={listado} />
            <ListadoCitas listado={listado} onClick={EliminarCita}/>
          </div>
        </div>      
    </>
  );
}

export default App;

