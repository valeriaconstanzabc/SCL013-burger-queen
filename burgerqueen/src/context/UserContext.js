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
  //<----------------TableButton----------------------->
  //<----------------DrinksMenu----------------------->
  const [products, setProducts] = React.useState([])
  const [objectProduct, setObjectProduct] = React.useState([])
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

  const [totalPrice, setTotalPrice] = React.useState([])
  const [sum] = React.useState([])

  const [sumName, setSumName] = React.useState([])

  //<----------------DrinksMenu----------------------->


  React.useEffect(() => {
    //<----------------TableButton----------------------->
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
    //<----------------TableButton----------------------->
    //<----------------DrinksMenu----------------------->
    const getProducts = async () => {
      try {
        const db = firebase.firestore()
        //trae todos los documentos de mesas
        const data = await db.collection('productos').get()
        console.log(data.docs)
        //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        const arrayColdDrinks = arrayData.filter(arrayData => arrayData.category === "bebidas frias")
        const arrayTeaDrinks = arrayData.filter(arrayData => arrayData.category === "tes")
        const arrayCoffeDrinks = arrayData.filter(arrayData => arrayData.category === "cafes")

        const arrayBurgerFoods = arrayData.filter(arrayData => arrayData.category === "burger")
        const arraySandwichFoods = arrayData.filter(arrayData => arrayData.category === "sandwich")
        const arrayDessertFoods = arrayData.filter(arrayData => arrayData.category === "antojos")
        const arraySweetFoods = arrayData.filter(arrayData => arrayData.category === "dulces")


        const arrayToppings = arrayData.filter(arrayData => arrayData.category === "agregados")

        console.log(arrayColdDrinks)

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
    //<----------------DrinksMenu----------------------->
  }, [])

  //<----------------TableButton----------------------->
  // constante que nos permite hacer el cambio para inresar el string del nombre del ciente y darle un id
  const activateEditTable = (item) => {
    setEditTable(true)
    setClient('')
    setIdTable(item.id)

  }
  //<----------------TableButton----------------------->

  //<----------------TableButton----------------------->
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
  //<----------------TableButton----------------------->

  //<----------------DrinksMenu----------------------->

  const activateClickProduct = (item) => {

    let objectProductt = {
      nameProduct: item.nameproduct,
      priceProduct: item.price,
      id: item.id
    }

    console.log(item.id)

    console.log(objectProductt)

    setObjectProduct([...objectProduct, 
      objectProductt])

    /*const deleteProduct = (id) => {
      console.log(id)
      const arrayFilter = objectProduct.filter(item =>
          item.id !== id)
          setObjectProduct(arrayFilter)
  }*/

    const productPrice = parseInt(item.price);

    sum.push = totalPrice.reduce((price1, price2) => price1 + price2, item.price)

    totalPrice.push(productPrice)
    setTotalPrice([...totalPrice])
    console.log(sum)

    const name = objectProduct.map(objt =>
      objt.nameProduct
    )
    console.log(name)

    const price = objectProduct.map(objt =>
      objt.priceProduct
    )
    console.log(price)



    const sumName = name.reduce((contadorName, name) => {
      contadorName[name] = (contadorName[name] || 0) + 1
      return contadorName
    }, {})



    console.log(sumName)

    const sumPrice = price.reduce((contadorPrice, price) => {
      contadorPrice[price] = (contadorPrice[price] || 0) + 1
      return contadorPrice
    }, {})

    console.log(sumPrice)
    //<----------------DrinksMenu----------------------->
    //<----------------Order----------------------->

    //<----------------Order----------------------->
  }



  return (
    <Provider value={{
      tables, setTable, client, editTable, activateEditTable, addNameClient,
      setClient, idTable, objectProduct, setObjectProduct, activateClickProduct, 
      coldDrinks, teaDrinks, coffeDrinks, BurgerFood,SandwichFood, DessertFood,
      SweetsFood, Toppings, sum, sumName, setSumName 
    }}>
      {children}
    </Provider>
  )
}


export { UserProvider, Consumer as UserConsumer, UserContext }
