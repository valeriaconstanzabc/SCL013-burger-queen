import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <main id="menuContainer">
            <section className="buttonsContainer">
                <section className="containerNewOrder">
                    <Link to="/orden">
                        <button className="btnNewOrder">Nuevo Pedido</button>
                    </Link>
                </section>

                <section className="containerDeliverOrder">
                    <Link to="/Entregas">
                        <button className="btnDeliverOrder">Pedidos a entregar</button>
                    </Link>
                </section>
            </section>

            <div className="containerProducts"></div>
        </main>
    )
}

export default Menu
