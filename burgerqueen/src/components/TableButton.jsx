import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import mesa from '../img/mesa.png'
import { withRouter } from 'react-router-dom'



const TableButton = (props) => {

  let {tables,client,editTable,activateEditTable,addNameClient,setClient,setTable} = useContext(UserContext)

  return (
    <main id="tableContainer">
      <section className="clientTitle">
        <h1>Seleccione mesa de cliente:</h1>
        {setTable}
      </section>
      <section className="tableButtons">
          {
          tables.map((item, index) => (
            //imprimo en pantalla los datos que tengo en firebase en esta caso los nombres de tareas//
            //item.id este es el id del elemento
            <button
              type="button"
              key={index}
              className="btnTable"
              onClick={() => activateEditTable(item)}>
              <p className="labelTable" key={item.id}>
                {item.name}</p>
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
            onChange={e => setClient(e.target.value)}
            value={client}
          />
          <button to="/orden" className="btnSend" onClick={editTable ? addNameClient : addNameClient}><Link className="btnSendLink" to="/orden">Guardar</Link></button>
        </form>
      </section>
    </main>
  );
}

export default withRouter(TableButton)
