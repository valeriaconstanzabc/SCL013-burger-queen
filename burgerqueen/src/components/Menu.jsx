import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div id="menuContainer">
            <div id="buttonsContainer">
                <div className="containerNewOrder">
                    <Link to="/orden">
                        <button className="btnNewOrder">Nuevo Pedido</button>
                    </Link>
                </div>
                <div className="containerDeliverOrder">
                    <button className="btnDeliverOrder">Pedidos a entregar</button>
                </div>
            </div>
            <div className="containerProducts">
            </div>
        </div>
    )
}



export default Menu
