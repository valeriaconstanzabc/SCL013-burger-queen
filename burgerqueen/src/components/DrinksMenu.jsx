import React from 'react'
// import Agua from '../img/agua.png'
// import Batido from '../img/batido.png'
// import Cafe1 from '../img/cafe1.png'
// import Cafe3 from '../img/cafe3.png'
// import Cafe4 from '../img/cafe4.png'
// import Jugo from '../img/jugo.png'
// import Soda from '../img/soda.png'
// import Te1 from '../img/te1.png'
// import Te2 from '../img/te2.png'
import '../components/componentsCss/DrinksMenu.css'
import { firebase } from '../firebase/firebase'

const DrinksMenu = () => {

    const [products, setProducts] = React.useState([])
    const [coldDrinks, setColdDrinks] = React.useState([])
    const [idProduct, setIdProduct] = React.useState('')
    const [idColdDrinks, setIdColdDrinks] = React.useState('')

    React.useEffect(() => {
        // traigo la data desde firebase
        const getProducts = async () => {
            try {
                const db = firebase.firestore()
                //trae todos los documentos de mesas
                const data = await db.collection('productos').get()
                console.log(data.docs)
                //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
                console.log(arrayData)
                const arrayColdDrinks = arrayData.filter(arrayData => arrayData.category === "bebidas frias")
                console.log(arrayColdDrinks)

                setProducts(arrayData)
                setColdDrinks(arrayColdDrinks)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    const activateClickProduct = (item) => {
        setProducts('')
        setIdProduct(item.id)
      }


    const getNameProduct = async (e) => {
      e.preventDefault()  
        try {
            const getColdDrinks= coldDrinks.map(item => (
                item.id === idColdDrinks ? { nameproduct: item.nameproduct, price: item.price} : item
            ))
            const arrayEdit = products.map(item => (
                item.id === idProduct ? { nameproduct: item.nameproduct, price: item.price} : item
            ))
            setProducts(arrayEdit)
            setIdProduct('')
            setColdDrinks(getColdDrinks)
            setIdColdDrinks('')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id="containerDrinks">
            <div className="containerbtnDrinks">
                {
                    coldDrinks.map(item => (
                        <button type="button" className="btnDrinks">
                            <img src={item.img} alt="" className="imgDrinks"></img>
                            <p className="textDrinks" list key={item.nameproduct}>
                                {item.nameproduct}</p>
                        </button>
                    ))
                }
                
            </div>
        </div>
    )
}

export default DrinksMenu
