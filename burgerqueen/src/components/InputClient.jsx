import React from 'react'

const InputClient = () => {

    const [nameClient, setNameClient ] = React.useState('')
    
    return (
        <div id="client">
            <label id="nameClient">Nombre de cliente:</label>
            <input id="inputClient" type="text" onChange = { (e) => setNameClient(e.target.value)}></input>
        </div>
    )
}

export default InputClient
