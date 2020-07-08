import React from 'react'
import { firebase } from '../firebase/firebase'



const Menu = () => {

    

    /*const listProduct = (e) => {
        e.preventDefault
        db.collection('mesas').get().then((querySnapshot) => { 
            const breakfast = querySnapshot.docs.map(doc => doc.data());*/

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
        
            </div>

        </div>
    )
}



export default Menu
