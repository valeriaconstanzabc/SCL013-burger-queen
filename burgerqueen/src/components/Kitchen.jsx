import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {UserContext} from '../context/UserContext'
import { firebase } from '../firebase/firebase'
import '../components/componentsCss/Kitchen.css'




const Kitchen = () => {
    
    const [newarray, setNewArray] = useState([])
    const [idOrderDeliver, setIdOrderDeliver] = useState('')

    const getUpate = () => {
        const db = firebase.firestore()
        db.collection('mesas').orderBy('fecha', 'desc').onSnapshot((querySnapshot) =>{
            const docs = []
            querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
            console.log(doc.data())
            console.log(doc.id)
        })
        console.log(docs)
        setNewArray(docs)
    })
    
 }
 useEffect(() => {
    getUpate()
 }, [])

 const activateOrderDeliver = (item) => {
    setIdOrderDeliver(item.id)
    console.log(idOrderDeliver)
 }

 const addOrderDeliver = () => {
    const db = firebase.firestore()
    db.collection('Entregas').doc(idOrderDeliver).update({
      order: newarray,
    })
 }

    return (
        <main className="kitcherContainer">
            {
                newarray.map((item, index) => (
                    <section className="orderKitchen">
                        <div className="orderTitle">
                            <div className="containerTittleOrden">
                                <div key={index}>
                                    <p>{item.name}</p>
                                </div>        
                            </div>

                            <div className="containerClientDateAndHour">
                                <div key={index}>
                                    <p className="dateAndHour">Fecha y hora: {item.fecha}</p>
                                    <p className="dateAndHour">Mesero: {item.nameWaiter}</p>
                                    <p className="dateAndHour">Client: {item.nameClient}</p>
                                </div>
                            </div>
                        </div>

                        <div className="scrollProduct">
                            <div className="containerOrderProduct">
                                <ul key={index}>
                                    {
                                    item.order.map(element => 
                                        <p>{element}</p>
                                    )}
                                    
                                </ul>
                            </div>
                        </div>

                        <section className="kitchenButton">
                            <button key={item.id} className="kitchenReady" onClick = {() => activateOrderDeliver()}>
                                Listo
                            </button>
                            <br/>
                            <button key={item.id} className="kitchenReady" onClick = {() => addOrderDeliver()}>
                                Firebase
                            </button>
                        </section>
                    </section>
                ))
            }
        </main>
    )
}

export default Kitchen 
