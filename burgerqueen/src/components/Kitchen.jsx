import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import { firebase } from '../firebase/firebase'




const Kitchen = () => {
    
    const [newarray, setNewArray] = useState([])
    const getUpate = () => {
        const db = firebase.firestore()
        db.collection('mesas').orderBy('fecha', 'desc').onSnapshot((querySnapshot) =>{
            const docs = []
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log(doc.id)
            docs.push({...doc.data(), id:doc.id})
        })
        console.log(docs)
        setNewArray(docs)
    })
    
 }
 useEffect(() => {
    getUpate()
 }, [])

    return (
        <main className="kitcherContainer">
            <h1></h1>
            <section className="orderKitchen">
                <header className="orderTitle">
                    <div className="containerTittleOrden">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <h1>HOLAAAA</h1>

                    </div>

                    <div className="containerClientDateAndHour">
                        <p className="dateAndHour">Fecha: </p>
                        {
                            newarray.map(item => (
                            <div key={item.id}><p>{item.fecha}</p>
                            <p>{item.name}</p>
                            <p>{item.order}</p>
                            </div>
                            ))
                        }
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
