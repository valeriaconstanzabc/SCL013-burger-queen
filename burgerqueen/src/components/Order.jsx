import React from 'react'
// import { orderContext } from '../context/OrderProvider'

const Order = (props) => {

    // const {objectProductt, setObjectProductt} = React.useContext(orderContext)

    return (
        <div id="containerOrderandButtons">
            <div id="containerOrder">
            <div id="orderTitle">
                <h1>Mesa 1</h1>
                <p className="dateAndHour">Fecha:</p>
                
               
            </div>
            <hr/>
            <div id="detailOrder">
                <div id="orderList">
                    <h3>Producto</h3>
                    <h3>Precio</h3>
                    <p>{props.objectProduct}</p>
                    {console.log(props.objectProduct)}
                </div>
                <hr/>
                <div>
                    
                </div>
                <div id="orderTotal">
                    <hr/>
                    <h3>Total:</h3>
                </div>
            </div>
        </div>
        <div id="containerButtonsOrder">
            <button id="returnButton">
             Volver
            </button>
            <button id="sendToKitchenButton">
            A la cocina
            </button>
        </div>
    </div>
    )
}

export default Order
