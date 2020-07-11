import React from 'react'
import { firebase } from '../firebase/firebase'
import mesa from '../img/mesa.png'
import { withRouter } from 'react-router-dom'


const TableButton = (props) => {

  const [tables, setTable] = React.useState([])
  const [client, setClient] = React.useState('')
  const [editTable, setEditTable] = React.useState(false)
  const [idTable, setIdTable] = React.useState('')

  React.useEffect(() => {
    // traigo la data desde firebase
    const getTables = async () => {
      try {
        const db = firebase.firestore()
        //trae todos los documentos de mesas
        const data = await db.collection('mesas').get()
        console.log(data.docs)
        //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        console.log(arrayData)

        setTable(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    getTables()
  }, [])

// constante que nos permite hacer el cambio para inresar el string del nombre del ciente y darle un id
  const activateEditTable = (item) => {
    setEditTable(true)
    setClient('')
    setIdTable(item.id)
  }


  const addNameClient = async (e) => {
    e.preventDefault()
    ///PEDIENTE VALIDACION///

    if (!client.trim()) {
      console.log('campo vacio')
      return
    }

    try {
      const db = firebase.firestore()
      await db.collection('mesas').doc(idTable).update({
        nameClient: client,
        fecha: Date.now()
      })

      const arrayEdit = tables.map(item => (
        item.id === idTable ? { name: item.name, nameClient: tables, fecha: Date.now() } : item
      ))

      setTable(arrayEdit)
      setEditTable(false)
      setClient('')
      setIdTable('')
      props.history.push('/ordenBebestibles')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main id="tableContainer">
      <div id="clientTitle">
        <h1>Seleccione mesa de cliente:</h1>
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
          <button to="/orden" className="btnSend" type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default withRouter(TableButton)
