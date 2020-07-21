import React from 'react'
import { firebase } from '../firebase/firebase'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

  //<----------------TableButton & Order----------------------->
  const [tables, setTable] = React.useState([])
  const [client, setClient] = React.useState('')
  const [editTable, setEditTable] = React.useState(false)
  const [idTable, setIdTable] = React.useState('')

  const [date, setDate] = React.useState('')
  const [newClient, setNewClient] = React.useState('')
  //<----------------TableButton & Order----------------------->

  //<----------------DrinksMenu-------------------------------->
  const [products, setProducts] = React.useState([])
  const [objectProduct, setObjectProduct] = React.useState([])
  const [sumName, setSumName] = React.useState([])
  const [name, setName ] = React.useState('')
  const [totalPrice, setTotalPrice] = React.useState([])
  const [sum] = React.useState([])

  //Drinks
  const [coldDrinks, setColdDrinks] = React.useState([])
  const [teaDrinks, setTeaDrinks] = React.useState([])
  const [coffeDrinks, setCoffeDrinks] = React.useState([])

  //Food
  const [BurgerFood, setBurgerFood] = React.useState([])
  const [SandwichFood, setSandwichFood] = React.useState([])
  const [DessertFood, setDessertFood] = React.useState([])
  const [SweetsFood, setSweetsFood] = React.useState([])

  //Toppings
  const [Toppings, setToppings] = React.useState([])
  //<----------------DrinksMenu-------------------------------->

  
  //useEffect nos permite realizar funciones secundarias dentro
  //del mismo componente
  React.useEffect(() => {

    //<----------------TableButton----------------------------->
    const getTables = async () => {  
      
      // traemos la data desde firebase y creamos los botones dinamicamente
      try {
        const db = firebase.firestore()
        const data = await db.collection('mesas').get()

        //recorremos la data y guardamos esa info en un objeto
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        setTable(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    getTables()
    //<----------------TableButton----------------------------->

    //<----------------DrinksMenu------------------------------>
    const getProducts = async () => {
      try {

        // traemos la data desde firebase y creamos los botones dinamicamente
        const db = firebase.firestore()
        const data = await db.collection('productos').get()

        //recorremos la data y guardamos esa info en un objeto
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        const arrayColdDrinks = arrayData.filter(arrayData => arrayData.category === "bebidas frias")
        const arrayTeaDrinks = arrayData.filter(arrayData => arrayData.category === "tes")
        const arrayCoffeDrinks = arrayData.filter(arrayData => arrayData.category === "cafes")

        const arrayBurgerFoods = arrayData.filter(arrayData => arrayData.category === "burger")
        const arraySandwichFoods = arrayData.filter(arrayData => arrayData.category === "sandwich")
        const arrayDessertFoods = arrayData.filter(arrayData => arrayData.category === "antojos")
        const arraySweetFoods = arrayData.filter(arrayData => arrayData.category === "dulces")

        const arrayToppings = arrayData.filter(arrayData => arrayData.category === "agregados")

        setProducts(arrayData)
        setColdDrinks(arrayColdDrinks)
        setTeaDrinks(arrayTeaDrinks)
        setCoffeDrinks(arrayCoffeDrinks)

        setBurgerFood(arrayBurgerFoods)
        setSandwichFood(arraySandwichFoods)
        setDessertFood(arrayDessertFoods)
        setSweetsFood(arraySweetFoods)

        setToppings(arrayToppings)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
    //<----------------DrinksMenu------------------------------>

  }, [])

  //<----------------TableButton----------------------------->
  
  //Función que nos permite cambiar el estado y posteriormente
  //ingresar el nombre del cliente dandole un nuevo id
  const activateEditTable = (item) => {
    setEditTable(true)
    setClient('')
    setIdTable(item.id)
    setDate(new Date().toLocaleString())
  }

  //funcón que nos actualiza la colección mesas en firebase
  const addNameClient = async (e) => {
    e.preventDefault()

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
        item.id === idTable ? { name: item.name, nameClient: tables, fecha: new Date().toLocaleString() } : item
      ))

      setTable(arrayEdit)
      setEditTable(false)
      setClient('')
      setNewClient(client) 
    } catch (error) {
      console.log(error)
    }
  }
  //<----------------TableButton----------------------------->

  
  //<----------------DrinksMenu------------------------------>

  //Función a la que le pasamos la suma y le asignamos valor,
  //id y nombre a cada producto. 
  const activateClickProduct = (item) => {
    let objectProductt = {
      nameProduct: item.nameproduct,
      priceProduct: item.price,
      id: item.id
    }
    setObjectProduct([...objectProduct, objectProductt])

    
    const productPrice = parseInt(item.price);
    sum.push = totalPrice.reduce((price1, price2) => price1 + price2, item.price)
    totalPrice.push(productPrice)
    setTotalPrice([...totalPrice])
  }
  //<----------------DrinksMenu------------------------------>

  //<---------------------Order------------------------------>
  //Función que hace un update a firebase y sube toda
  //la info actualizada de la boleta, a la mesa
  const addOrder = () => {
    const arrayMap = objectProduct.map(item => (
        item.nameProduct
    ))

    firebase.firestore().collection('mesas').doc(idTable).update({
        order: arrayMap,
        nameWaiter: name         
    })
  }

  //Función que me permite eliminar el producto una vez
  //que ya está en la boleta
  const deleteProduct = (id) => {
    try {
        const arrayFilter = objectProduct.filter(item =>
            item.id !== id)
        setObjectProduct(arrayFilter)
    } catch (error) {
        console.log(error)
    }
  }
  //<---------------------Order------------------------------>

  return (
    <Provider value={{
      name, setName, newClient, date, tables, setTable, client, editTable, activateEditTable, addNameClient,
      setClient, idTable, objectProduct, setObjectProduct, activateClickProduct, 
      coldDrinks, teaDrinks, coffeDrinks, BurgerFood,SandwichFood, DessertFood,
      SweetsFood, products, Toppings, sum, sumName, setSumName, addOrder, deleteProduct 
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
