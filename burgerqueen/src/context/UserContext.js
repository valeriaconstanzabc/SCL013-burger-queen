import React from 'react'
import { firebase } from '../firebase/firebase'

let UserContext = React.createContext()
let {Provider, Consumer} = UserContext

function UserProvider({children}){
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
          fecha: new Date().toLocaleString(),
        })
  
        const arrayEdit = tables.map(item => (
          item.id === idTable ? { name: item.name, nameClient: tables, fecha: Date.now() } : item
        ))
  
        setTable(arrayEdit)
        setEditTable(false)
        setClient('')
        /*setIdTable('')*/


  
      } catch (error) {
        console.log(error)
      }
    }

    

    return (
        <Provider value={{tables,setTable, client, editTable, activateEditTable, addNameClient, setClient, idTable}}>
            {children}
        </Provider>
    )
}


export {UserProvider, Consumer as UserConsumer, UserContext}
