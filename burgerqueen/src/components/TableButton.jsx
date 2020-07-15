import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import mesa from '../img/mesa.png'
import { withRouter } from 'react-router-dom'



const TableButton = (props) => {

  let {tables,client,editTable,activateEditTable,addNameClient,setClient,setTable} = useContext(UserContext)

  return (
    <main id="tableContainer">
      <div id="clientTitle">
        <h1>Seleccione mesa de cliente:</h1>
        {setTable}
      </div>
      <div id="tableButtons">
          {
          tables.map(item => (
            //imprimo en pantalla los datos que tengo en firebase en esta caso los nombres de tareas//
            //item.id este es el id del elemento
            <button
              type="button"
              key={item.id}
              className="btnTable"
              onClick={() => activateEditTable(item)}>
              <p className="labelTable" key={item.id}>
                {item.name}</p>
                <img src={mesa} alt="mesa" className="imgTable"></img>
            </button>
          ))
          }
      </div>

      <div id="client">
        <label id="nameClient">Nombre de cliente:</label>
        <form onSubmit={editTable ? addNameClient : addNameClient}>
          <input
            id="inputClient"
            type="text"
            placeholder="nombre cliente"
            onChange={e => setClient(e.target.value)}
            value={client}
          />
          <button to="/orden" className="btnSend" type="submit">Guardar</button>
          <button  className="btnGo" type="submit"><Link to="/orden">Ir a pedido</Link></button>
        
        </form>
      </div>
    </main>
  );
}

export default withRouter(TableButton)
