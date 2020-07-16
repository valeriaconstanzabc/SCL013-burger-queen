import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import { firebase } from '../firebase/firebase'




const Kitchen = () => {
    
    const [newarray, setNewArray] = useState([])

    const getUpate = () => {
        const db = firebase.firestore()
        db.collection('mesas').orderBy('fecha', 'desc').onSnapshot((querySnapshot) =>{
        querySnapshot.forEach((doc) => {
            console.log(doc.data().nameClient)
            const nuevo = doc.data()
        })
        console.log(newarray)
    })
    
 }
 
 useEffect(() => {
    getUpate()
 }, [])

    return (
        <main className="kitcherContainer">
            <section className="orderKitchen">
                <header className="orderTitle">
                    <div className="containerTittleOrden">
                    <h1></h1>
                    </div>

                    <div className="containerClientDateAndHour">
                        <p className="dateAndHour">Fecha: </p>
                        <p className="dateAndHour">Cliente: </p>
                    </div>
                </header>
                <div className="scrollProduct">
                    <ul className="containerOrderProduct">
                        <h3></h3>
                    </ul>
               </div>


            </section>
            <section className="kitchenButton">
                <button className="kitchenReady">
                    Listo
                </button>
            </section>
        </main>
    )
}

export default Kitchen 
