import React, { useState } from "react";

export default function Formulario({setListado,listado}) {
    const [datos,setDatos] = useState({
       // id:0;
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error,setError] = useState(false);

    const {mascota,propietario,fecha,hora,sintomas} = datos;
    
    const onChangeHandle = (e)=>{
        setDatos({...datos,[e.target.name]:e.target.value})
    }    


    const buttonOnsubmitHandler = evento =>{
        evento.preventDefault();
       
        //valido
        if(mascota == '' || propietario == '')
        {
            //setear error
            setError(true)
            return;
        }

        setError(false)
        //lo agrego al listado
        
        setListado([...listado,datos]);
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            {error && <div className="alerta-error">ERROR, falta completar campos</div>}
            <form onSubmit={buttonOnsubmitHandler}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={onChangeHandle}/>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={onChangeHandle}/>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={onChangeHandle} />
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={onChangeHandle} />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={onChangeHandle}></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )    
}
