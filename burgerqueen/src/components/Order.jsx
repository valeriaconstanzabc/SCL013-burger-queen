import React, { useContext, Fragment } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext'

//Componente de la Boleta
const Order = () => {
    
    let { idTable, date, newClient, objectProduct, deleteProduct, sum, addOrder } = useContext(UserContext)

    return (
        <div className="containerOrder">
            <header className="orderTitle">
                <div className="containerTittleOrden">

                    {/* Traemos el hook que guarda el número de mesa */}
                    <h1>{idTable}</h1>
                </div>

                <div className="containerClientDateAndHour">

                    {/* Traemos el hook que guarda la fecha */}
                    <p className="dateAndHour">Fecha: {date}</p>
                    {/* Traemos el hook que guarda el cliente ingresado */}
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

                                //Recorremos del hook map de objectProduct que es donde guardamos
                                //el nombre y precio de cada uno de nuestros productos.
                                <ul key={item.id} className="containerOrderProduct">
                                    <div className="containerAlineProduct">
                                        <h3>{item.nameProduct}</h3>
                                    </div>
                                    <div className="containerAlinePrice">
                                        <h3>{item.priceProduct}</h3>
                                    </div>
                                    <div className="containerAlinebtn">
                                        <button type="button" className="btnDelete"

                                            //Función que me permite eliminar el producto una vez que ya
                                            //está en la boleta
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

                        {/* hooks donde guardamos la info del precio de
                        cada producto y con reduce, vamos sumando cada uno */}
                        <h3>$ {sum.push}</h3>
                    </section>
                </section>

            </main>

            <footer className="containerButtonsOrder">
                <Link to="/mesas">
                    <button className="returnButton">Volver</button>
                </Link>
                <Link to="/cocina">

                    {/* función que hace un update a firebase y sube toda
                    la info actualizada de la boleta, a la mesa */}
                    <button className="sendToKitchenButton" onClick={() => addOrder()}>A la cocina</button>
                </Link>
            </footer>
        </div>
    )
}

export default Order
