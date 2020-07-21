import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import mesa from '../img/mesa.png'
import { withRouter } from 'react-router-dom'

const TableButton = () => {

  let {tables,client,editTable,activateEditTable,addNameClient,setClient,setTable} = useContext(UserContext)

  return (
    <main id="tableContainer">
      <section className="clientTitle">
        <h1>Seleccione mesa de cliente:</h1>
        {setTable}{/* Acá entregamos la información que está en la data de todas las mesas*/}
      </section>

      <section className="tableButtons">
          {
            tables.map((item, index) => ( 

              //recorremos nuestro hook donde guardamos todas las mesas
              <button
                type="button"
                key={index}
                className="btnTable"
                
                //Entregamos la función que nos permite cambiar el estado y
                //posteriormente ingresar el nombre del cliente.
                onClick={() => activateEditTable(item)}> 
                <p className="labelTable" key={item.id}>{item.name}</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
              </button>
            ))
          }
      </section>

      <section className="client">
        <label id="nameClient">Nombre de cliente:</label>
        <form>
          <input
            className="inputClient"
            type="text"
            placeholder="nombre cliente"

            //SetClient es un hook que creamos para entregar el valor
            //del input que se está ingresando 
            onChange={e => setClient(e.target.value)}
            value={client}
          />
          
          {/* EditTable es el hook que nos verifica que se pueda editar el campo del cliente.
          EditTable es lo que evaluamos, y le damos la respuesta de exito y de negativa.
          addName es la función que nos actualiza la colección mesas en firebase. */}
          <button to="/orden" className="btnSend" onClick={editTable ? addNameClient : addNameClient}><Link className="btnSendLink" to="/orden">Guardar</Link></button>
        </form>
      </section>
    </main>
  );
}

export default withRouter(TableButton)
