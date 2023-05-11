import ListadoCitas from "./components/ListadoCitas";
import Formulario from "./components/Formulario";

//import Soplon from "./components/Soplon";

function App() {
  const listado = [
    { Mascota:'Nina',Dueño: 'Martin' ,Fecha:'2021-08-05' ,Hora:'08:20',Sintomas:'Le duele la pierna' },
  ];

  return (
    <>
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <Formulario />
            <ListadoCitas listado={listado} />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
