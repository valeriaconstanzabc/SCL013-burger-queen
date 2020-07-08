import React from 'react'
import { firebase } from '../firebase/firebase'



const Menu = () => {

    const [products, setProducts] = React.useState([])
    const [idProduct, setIdProduct] = React.useState('')

    React.useEffect(() => {
        // traigo la data desde firebase
        const getProducts = async () => {
            try {
                const db = firebase.firestore()
                //trae todos los documentos de mesas
                const data = await db.collection('productos').get()
                console.log(data.docs)
                //con (doc => ({ id: doc.id,...doc.data() accedemos a la informacion que esta en la data deja la informacion dentro de un objeto
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setProducts(arrayData)
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
            const arrayEdit = products.map(item => (
                item.id === idProduct ? { nameproduct: item.nameproduct, price: item.price} : item
            ))
            setProducts(arrayEdit)
            setIdProduct('')

        } catch (error) {
            console.log(error)
        }
    }

    /*const listProduct = (e) => {
        e.preventDefault
        db.collection('mesas').get().then((querySnapshot) => { 
            const breakfast = querySnapshot.docs.map(doc => doc.data());*/

    return (
        <div id="menuContainer">
            <div id="buttonsContainer">
                <div className="containerNewOrder">
                    <button className="btnNewOrder">Nuevo Pedido</button>
                </div>
                <div className="containerDeliverOrder">
                    <button className="btnDeliverOrder">Pedidos a entregar</button>
                </div>
            </div>
            <div className="containerProducts">
                {
                    products.map(item => (
                        <p><button className="edit"
                        onClick={() => activateClickProduct(item)}>
                            <p className="list" list key={item.nameproduct}>
                    {item.nameproduct}</p>
                        </button></p>
                    ))
                }
            </div>

        </div>
    )
}



export default Menu
