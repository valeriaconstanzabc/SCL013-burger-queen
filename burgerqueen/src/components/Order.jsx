import React from 'react'
import { Link } from "react-router-dom";

const Order = (props) => {
    console.log(props.objectProduct)
    return (
        <div id="containerOrderandButtons">
            <div id="containerOrder">
                <div id="orderTitle">
                    <h1>Mesa 1</h1>
                    <p className="dateAndHour">Fecha:</p>
                </div>
                <hr />
                <div id="detailOrder">
                    <div id="orderList">
                        <h3>Productos</h3>
                        <h3>Precio</h3>
                    </div>
                    <hr />
                    <div className="containerOrderProduct">
                        <h3>{props.objectProduct['nameProduct']}</h3>
                        <h3>{props.objectProduct['priceProduct']}</h3>
                    </div>
                    <div id="orderTotal">
                        <hr />
                        <h3>Total:</h3>
                    </div>
                </div>
            </div>
            <div id="containerButtonsOrder">
                <Link to="/mesas">
                    <button id="returnButton">Volver</button>
                </Link>
                <button id="sendToKitchenButton">
                    A la cocina
            </button>
            </div>
        </div>
    )
}

export default Order
