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

  

  React.useEffect(() => {


    //<----------------TableButton----------------------------->
    const getTables = async () => {  // traigo la data desde firebase
      try {
        const db = firebase.firestore()
        const data = await db.collection('mesas').get()
        //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
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
        const db = firebase.firestore()
        const data = await db.collection('productos').get()
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
  // constante que nos permite hacer el cambio para inresar el 
  //string del nombre del ciente y darle un id
  const activateEditTable = (item) => {
    setEditTable(true)
    setClient('')
    setIdTable(item.id)
    setDate(new Date().toLocaleString())
  }
  //<----------------TableButton----------------------------->


  //<----------------TableButton----------------------------->
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
  const activateClickProduct = (item) => {

    let objectProductt = {
      nameProduct: item.nameproduct,
      priceProduct: item.price,
      id: item.id
    }

    setObjectProduct([...objectProduct, 
      objectProductt])

    const productPrice = parseInt(item.price);

    sum.push = totalPrice.reduce((price1, price2) => price1 + price2, item.price)

    totalPrice.push(productPrice)
    setTotalPrice([...totalPrice])

    const name = objectProduct.map(objt =>
      objt.nameProduct
    )

    const price = objectProduct.map(objt =>
      objt.priceProduct
    )

    const sumName = name.reduce((contadorName, name) => {
      contadorName[name] = (contadorName[name] || 0) + 1
      return contadorName
    }, {})

    const sumPrice = price.reduce((contadorPrice, price) => {
      contadorPrice[price] = (contadorPrice[price] || 0) + 1
      return contadorPrice
    }, {})

  //<----------------DrinksMenu------------------------------>
  }



  return (
    <Provider value={{
      name, setName, newClient, date, tables, setTable, client, editTable, activateEditTable, addNameClient,
      setClient, idTable, objectProduct, setObjectProduct, activateClickProduct, 
      coldDrinks, teaDrinks, coffeDrinks, BurgerFood,SandwichFood, DessertFood,
      SweetsFood, products, Toppings, sum, sumName, setSumName 
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
