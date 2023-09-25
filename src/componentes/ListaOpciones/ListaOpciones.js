import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //Metodo MAP -> arreglo.map( (equipo,index) => { 
    // return <option></option>
    //})    
    const manejarCambios = (e) =>{
        props.actualizarEquipo(e.target.value)
    };

    return <div  className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambios}>
            <option value="" disabled defaultValue="" hidden> Selecionar equipo...</option>
            {props.equipos.map( (equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones