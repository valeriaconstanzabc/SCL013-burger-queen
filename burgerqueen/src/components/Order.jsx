import React, { useContext, Fragment } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'

const Order = () => {
    let {setObjectProduct, setClient, idTable, objectProduct, sum} = useContext(UserContext)
    console.log(objectProduct)

    const deleteProduct = async (id)  => {
        console.log(objectProduct)
        try {
        console.log(objectProduct)
        const arrayFilter = objectProduct.filter(item =>
            item.id !== id)
            setObjectProduct(arrayFilter)
        }catch (error) {
            console.log(error)
          }
          
        }
    return (
        <div id="containerOrderandButtons">
            <div id="containerOrder">
                <div id="orderTitle">
                 <h1>{idTable}</h1>
                 <h1>{setClient}</h1>
                    <p className="dateAndHour">Fecha:</p>
                </div>

                <hr />

                <div id="detailOrder">
                    <div id="orderList">
                        <h3>Productos</h3>
                        <h3>Precio</h3>
                    </div>

                    <hr />
                    
                    <Fragment>
                        {
                            objectProduct.map(item => (
                                <div key={item.id} className="containerOrderProduct">
                                    <h3>{item.nameProduct}</h3>
                                    <h3>{item.priceProduct}</h3>
                                    <button
                                    onClick={() => deleteProduct(item)}
                                    >X
                                    </button>
                                </div>
                            ))
                        }        
                    </Fragment>
                    
                    <div id="orderTotal">
                        <hr />
                        <div id="containerTotal">
                            <h3>Total:</h3>
                            <h3>$ {[sum.push]}</h3> 
                        </div>                       
                    </div>
                </div>
            </div>

            <div id="containerButtonsOrder">
                <Link to="/mesas">
                    <button id="returnButton">Volver</button>
                </Link>
                <button id="sendToKitchenButton">A la cocina</button>
            </div>
        </div>
    )
}

export default Order
