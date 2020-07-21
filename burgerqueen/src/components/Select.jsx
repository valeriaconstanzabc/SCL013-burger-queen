import React, { useContext, Fragment } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'

//componente en donde seleccionamos el nombre del mesero
const Select = () => {

    let {name, setName} = useContext(UserContext)

    return (
        <Fragment>
            <select className="selectName" onChange = {e => setName(e.target.value)} value={name}>
                <option value="">Selecciona tu Nombre</option>
                <option value="Marta Sanchez">Marta Sanchez</option>
                <option value="Juan Carlos Bodoque">Juan Carlos Bodoque</option>
                <option value="Felipe Pérez">Felipe Pérez</option>
            </select>
            
            <Link to="/mesas">
                <button className="btnGetIn">Entrar</button>
            </Link>
        </Fragment>
    )
}

export default Select
