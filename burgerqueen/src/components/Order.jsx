import React from 'react'

const Order = () => {
    return (
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
    )
}

export default Order
