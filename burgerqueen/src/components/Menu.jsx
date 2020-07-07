import React from 'react'

const Menu = () => {
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
                <p>Comida</p>
            </div>
           
        </div>
    )
}

export default Menu
