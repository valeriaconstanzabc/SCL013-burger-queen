import React, { useContext,useState, useEffect, Fragment } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { firebase } from '../firebase/firebase'

const Order = () => {
    let { name, setObjectProduct, idTable, objectProduct, sum, date, newClient } = useContext(UserContext)
   /*  const [newarray, setNewArray] = useState([])*/


    const addOrder = () => {
        const arrayMap = objectProduct.map(item => (
            item.nameProduct
        ))
        firebase.firestore().collection('mesas').doc(idTable).update({
            order: arrayMap,
            nameWaiter: name         
        })     
    }

   /* const getUpate = () => {
        const db = firebase.firestore()
        db.collection('mesas').orderBy('fecha', 'desc').onSnapshot((querySnapshot) =>{
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            setNewArray(doc.data())
        })
    })
 }

 useEffect(() => {
    getUpate()
 }, [])*/


    const deleteProduct = (id) => {
        try {
            const arrayFilter = objectProduct.filter(item =>
                item.id !== id)
            setObjectProduct(arrayFilter)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="containerOrder">
            <header className="orderTitle">
                <div className="containerTittleOrden">
                    <h1>{idTable}</h1>
                </div>

                <div className="containerClientDateAndHour">
                    <p className="dateAndHour">Fecha: {date}</p>
                    <p className="dateAndHour">Cliente: {newClient}</p>
                </div>
            </header>

            <hr />

            <main className="totalOrder">
                <section className="orderList">
                    <h3>Productos</h3>
                    <h3>Precio</h3>
                </section>
                <hr />
                <div className="scrollProduct">

                    <Fragment>
                        {
                            objectProduct.map(item => (
                                <ul key={item.id} className="containerOrderProduct">
                                    <div className="containerAlineProduct">
                                        <h3>{item.nameProduct}</h3>
                                    </div>
                                    <div className="containerAlinePrice">
                                        <h3>{item.priceProduct}</h3>
                                    </div>
                                    <div className="containerAlinebtn">
                                        <button type="button" className="btnDelete"
                                            onClick={() => deleteProduct(item.id)}
                                        ><img className="imgBtnDelete" src="http://imgfz.com/i/p6lNuWL.png" alt="" />
                                        </button>
                                    </div>

                                </ul>
                            ))
                        }
                    </Fragment>
                </div>

                <section className="orderTotal">
                    <hr />
                    <section className="containerTotal">
                        <h3>Total:</h3>
                        <h3>$ {sum.push}</h3>
                    </section>
                </section>

            </main>

            <footer className="containerButtonsOrder">
                <Link to="/mesas">
                    <button className="returnButton">Volver</button>
                </Link>
                <Link to="/cocina">
                    <button className="sendToKitchenButton" onClick={() => addOrder()}>A la cocina</button>
                </Link>
            </footer>
        </div>
    )
}

export default Order
