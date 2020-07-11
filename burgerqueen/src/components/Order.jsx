import React, { Fragment } from 'react'
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
                        <h3>Total:</h3>
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
