import React, { useContext, Fragment } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'

const Order = (props) => {
    let {setClient,idTable} = useContext(UserContext)
    console.log(idTable)
    console.log(props.objectProduct)

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
                            props.objectProduct.map(obj => (
                                <ul key={obj.category} className="containerOrderProduct">
                                    <h3>{obj.nameProduct}</h3>
                                    <h3>{obj.priceProduct}</h3>
                                </ul>
                            ))
                        }        
                    </Fragment>
                    <div id="orderTotal">
                        <hr />
                        <div id="containerTotal">
                            <h3>Total:</h3>
                            <h3>$ {[props.sum.push]}</h3> 
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
