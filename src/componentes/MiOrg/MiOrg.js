import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
        
    //Estado - Hooks 
    //Hook useState
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true);
    //const manejarClick = () =>{
    //    console.log("Mostrar/Ocultar Formulario", mostrar)
    //    actualizarMostrar(!mostrar); 

    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Ocultar Formulario" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg