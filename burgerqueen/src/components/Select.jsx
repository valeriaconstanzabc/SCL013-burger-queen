import React from 'react'
// import { withRouter } from 'react-router-dom'
import { db } from '../firebase/firebase'

const Select = () => {

    const [name, setName] = React.useState('')

    const processData = async(e) => {
        e.preventDefault()
        try {
           const waiter = {
               name : name,
               date: Date.now()
           }
           await db.collection('orden').add(waiter)
        }catch (error) {
            console.log(error)
        }
    }
    
    return (
        <form onChange={processData}>
            <select id="selectName" onChange={(e) => setName(e.target.value)} value={name}>
                <option>Selecciona tu Nombre</option>
                <option value={'Marta Sánchez'}>Marta Sánchez</option>
                <option value={"Juan Carlos Bodoque"}>Juan Carlos Bodoque</option>
                <option value={"Felipe Pérez"}>Felipe Pérez</option>
            </select>
        </form>
    )
}

export default Select
