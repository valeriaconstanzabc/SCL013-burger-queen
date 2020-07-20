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
            })

            setNewArray(docs)
        })
    }
    useEffect(() => {
        getUpate()
    }, [])

    const activateOrderDeliver = (item) => {
        setIdOrderDeliver(item.id)
    }

    const addOrderDeliver = () => {
        var indexOrder = newarray.map(item => item.id).indexOf(idOrderDeliver)
        const db = firebase.firestore()

        db.collection('Entregas').doc(idOrderDeliver).update({
            fecha: newarray[indexOrder].fecha,
            id: newarray[indexOrder].id,
            name: newarray[indexOrder].name,
            nameClient: newarray[indexOrder].nameClient,
            nameWaiter: newarray[indexOrder].nameWaiter,
            order: newarray[indexOrder].order
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
            <section className="btnKitchenReturn">
                <Link to="/orden">
                    <button className="returnButton">Volver</button>
                </Link>
            </section>
            {
                newarray.map((item, index) => (
                    <section key={index} className="orderKitchen">
                        <div className="orderTitle">
                            <div className="containerTittleOrden">
                                <div key={index}>
                                    <p className="nameTable">{item.name}</p>
                                    <button type="button" 
                                    className="btnDeleteKitchen" 
                                    onClick={()=> deleteOrder(item.id)}
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
                                    item.order.map((element, index) => 
                                        <p key={index} className="productOrder">{element}</p>
                                    )}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="kitchenButton">
                            <button  className="kitchenReady">
                                <p className="btnList" key={item.id} onClick = {() => activateOrderDeliver(item)}><img className="btnKitchenReady" src="http://imgfz.com/i/OaD2yhx.png" alt=""/></p>
                            </button>
                            
                            <button type="submit" key={item.id} className="btnListo" onClick = {() => addOrderDeliver()}>
                                Despachar
                            </button>
                            
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Kitchen 
