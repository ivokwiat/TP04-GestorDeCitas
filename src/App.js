import { useState } from "react";
import ListadoCitas from "./components/ListadoCitas";
import Formulario from "./components/Formulario";

function App() {  
  const [listado,setListado] = useState([])

  return (
    <>      
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <Formulario setListado={setListado} listado={listado} />
            <ListadoCitas listado={listado} />
          </div>
        </div>      
    </>
  );
}

export default App;
