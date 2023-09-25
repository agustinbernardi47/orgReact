import "./equipo.css"
import Colaborador from "../Colaborador/colaborador"
import hexToRgba from 'hex-to-rgba'
const Equipo = (props) =>{
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }
    const border = {
        borderColor: colorPrimario
    }

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    
    return <> { colaboradores.length > 0 && 
        <section className="equipo" style={obj} >
        <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id);
            } }
        
        >
            
        </input>
        <h3 style={border}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>)
            }
        </div>
    </section>
    }</>
}


export default Equipo