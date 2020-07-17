import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
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
     console.log(item.id)
     console.log(item.name)
     setIdOrderDeliver(item.id)
 }

 const addOrderDeliver = () => {

    var indexOrder = newarray.map(item => item.id).indexOf(idOrderDeliver)
    const db = firebase.firestore()
    db.collection('Entregas').doc(idOrderDeliver).set({
      order: newarray[indexOrder]
    })
    db.collection('mesas').doc(idOrderDeliver).update({
        fecha: '',
        nameClient: '',
        nameWaiter: '',
        order: [],
 })
}

 
 const deleteOrder = (id) => {
    const db = firebase.firestore()
    db.collection('mesas').doc(id).update({
        fecha: '',
        nameClient: '',
        nameWaiter: '',
        order: [],
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
                                    <p className="nameTable">{item.name}</p>
                                    <button type="button" 
                                    className="btnDeleteKitchen" 
                                    onClick={()=>deleteOrder(item.id)}
                                    ><img className="imgBtnDeleteKitchen" src="http://imgfz.com/i/GBTyIih.png" alt="" />
                                    </button>
                                </div>        
                            </div>

                            <div className="containerClientDateAndHour">
                                <div key={index}>
                                    <p className="dateAndHour">Fecha y hora: {item.fecha}</p>
                                    <p className="dateWaiter">Mesero:
                                     {item.nameWaiter}</p>
                                    <p className="dateClient">Ciente: 
                                    {item.nameClient}</p>
                                </div>
                            </div>
                        </div>

                        <div className="scrollProduct">
                            <div className="containerOrderProduct">
                                <div className="divProduct" key={index}>
                                    {
                                    item.order.map(element => 
                                        <p className="productOrder">{element}</p>
                                    )}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="kitchenButton">
                            <button  className="kitchenReady" onClick = {() => activateOrderDeliver(item)}>
                                <p className="btnList" key={item.id}>Listo</p>
                            </button>
                            <br/>
                            <Link to="/Entregas">
                            <button type="submit" key={item.id} className="kitchenReady" onClick = {() => addOrderDeliver()}>
                                Firebase
                            </button>
                            </Link>
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Kitchen 
